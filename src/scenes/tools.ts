/**
 * Generated by the Babylon.JS Editor v4.0.0-beta.7
 */

import {
    Scene, Node, Mesh,
    SSAO2RenderingPipeline, DefaultRenderingPipeline, StandardRenderingPipeline,
    Vector2, Vector3, Vector4,
    Color3, Color4,
    SerializationHelper,
} from "@babylonjs/core";

export type NodeScriptConstructor = (new (...args: any[]) => Node);
export type GraphScriptConstructor = (new (scene: Scene) => any);
export type ScriptMap = {
    [index: string]: {
        IsGraph?: boolean;
        default: (new (...args: any[]) => NodeScriptConstructor | GraphScriptConstructor);
    }
};

/**
 * Requires the nedded scripts for the given nodes array and attach them.
 * @param nodes the array of nodes to attach script (if exists).
 */
function requireScriptForNodes(scriptsMap: ScriptMap, nodes: Node[] | Scene[]): void {
    const initializedNodes: { node: Node | Scene; exports: any; }[] = [];

    // Initialize nodes
    for (const n of nodes) {
        if (!n.metadata || !n.metadata.script || !n.metadata.script.name || n.metadata.script.name === "None") { continue; }

        const exports = scriptsMap[n.metadata.script.name];
        if (!exports) { continue; }

        // Add prototype.
        const prototype = exports.default.prototype;
        for (const key in prototype) {
            if (!prototype.hasOwnProperty(key) || key === "constructor") { continue; }
            n[key] = prototype[key].bind(n);
        }

        // Call constructor
        prototype.constructor.call(n);

        // Call onInitialize
        prototype.onInitialize?.call(n);

        initializedNodes.push({ node: n, exports });
    }

    // Configure initialized nodes
    for (const i of initializedNodes) {
        const n = i.node;
        const e = i.exports;
        const scene = i.node instanceof Scene ? i.node : i.node.getScene();
        
        // Check start
        if (e.default.prototype.onStart) {
            scene.onBeforeRenderObservable.addOnce(() => n["onStart"]());
        }

        // Check update
        if (e.default.prototype.onUpdate) {
            scene.onBeforeRenderObservable.add(() => n["onUpdate"]());
        }

        // Check properties
        const properties = n.metadata.script.properties ?? { };
        for (const key in properties) {
            const p = properties[key];

            switch (p.type) {
                case "Vector2": n[key] = new Vector2(p.value.x, p.value.y); break;
                case "Vector3": n[key] = new Vector3(p.value.x, p.value.y, p.value.z); break;
                case "Vector4": n[key] = new Vector4(p.value.x, p.value.y, p.value.z, p.value.w); break;

                case "Color3": n[key] = new Color3(p.value.r, p.value.g, p.value.b); break;
                case "Color4": n[key] = new Color4(p.value.r, p.value.g, p.value.b, p.value.a); break;

                default: n[key] = p.value; break;
            }
        }

        // Check linked children.
        if (n instanceof Node) {
            const childrenLinks = (e.default as any)._ChildrenValues ?? [];
            for (const link of childrenLinks) {
                const child = n.getChildren((node => node.name === link.nodeName), true)[0];
                n[link.propertyKey] = child;
            }
        }

        // Check linked nodes from scene.
        const sceneLinks = (e.default as any)._SceneValues ?? [];
        for (const link of sceneLinks) {
            const node = scene.getNodeByName(link.nodeName);
            n[link.propertyKey] = node;
        }

        // Check particle systems
        const particleSystemLinks = (e.default as any)._ParticleSystemValues ?? [];
        for (const link of particleSystemLinks) {
            const ps = scene.particleSystems.filter((ps) => ps.emitter === n && ps.name === link.particleSystemName)[0];
            n[link.propertyKey] = ps;
        }

        // Check pointer events
        const pointerEvents = (e.default as any)._PointerValues ?? [];
        for (const event of pointerEvents) {
            scene.onPointerObservable.add((e) => {
                if (e.type !== event.type) { return; }
                if (!event.onlyWhenMeshPicked) { return n[event.propertyKey](e); }

                if (e.pickInfo?.pickedMesh === n) {
                    n[event.propertyKey](e);
                }
            });
        }

        // Check keyboard events
        const keyboardEvents = (e.default as any)._KeyboardValues ?? [];
        for (const event of keyboardEvents) {
            scene.onKeyboardObservable.add((e) => {
                if (event.type && e.type !== event.type) { return; }
                
                if (!event.keys.length) { return n[event.propertyKey](e); }

                if (event.keys.indexOf(e.event.keyCode) !== -1) {
                    n[event.propertyKey](e);
                }
            });
        }

        // Retrieve impostors
        if (n instanceof Mesh && !n.physicsImpostor) {
            n.physicsImpostor = n._scene.getPhysicsEngine()?.getImpostorForPhysicsObject(n);
        }
    }
}

/**
 * Attaches all available scripts on nodes of the given scene.
 * @param scene the scene reference that contains the nodes to attach scripts.
 */
export function attachScripts(scriptsMap: ScriptMap, scene: Scene): void {
    requireScriptForNodes(scriptsMap, scene.meshes);
    requireScriptForNodes(scriptsMap, scene.lights);
    requireScriptForNodes(scriptsMap, scene.cameras);
    requireScriptForNodes(scriptsMap, scene.transformNodes);
    requireScriptForNodes(scriptsMap, [scene]);

    // Graphs
    for (const scriptKey in scriptsMap) {
        const script = scriptsMap[scriptKey];
        if (script.IsGraph) {
            const instance = new script.default(scene);
            scene.executeWhenReady(() => instance["onStart"]());
            scene.onBeforeRenderObservable.add(() => instance["onUpdate"]());
        }
    }
}

/**
 * Configures and attaches the post-processes of the given scene.
 * @param scene the scene where to create the post-processes and attach to its cameras.
 * @param rootUrl the root Url where to find extra assets used by pipelines. Should be the same as the scene.
 */
export function configurePostProcesses(scene: Scene, rootUrl: string = null): void {
    if (rootUrl === null || !scene.metadata?.postProcesses) { return; }

    // Load  post-processes configuration
    const data = scene.metadata.postProcesses;
    if (data.ssao) {
        const ssao = SSAO2RenderingPipeline.Parse(data.ssao.json, scene, rootUrl);
        if (data.ssao.enabled) {
            scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(ssao.name, scene.cameras);
        }
    }
    if (data.standard) {
        const standard = StandardRenderingPipeline.Parse(data.standard.json, scene, rootUrl);
        if (!data.standard.enabled) {
            scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(standard.name, scene.cameras);
        }
    }
    if (data.default) {
        const def = DefaultRenderingPipeline.Parse(data.default.json, scene, rootUrl);
        if (!data.default.enabled) {
            scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(def.name, scene.cameras);
        }
    }
}

/**
 * Overrides the texture parser.
 */
(function overrideTextureParser(): void {
    const textureParser = SerializationHelper._TextureParser;
    SerializationHelper._TextureParser = (sourceProperty, scene, rootUrl) => {
        const texture = textureParser.call(SerializationHelper, sourceProperty, scene, rootUrl);

        if (sourceProperty.url) {
            texture.url = rootUrl + sourceProperty.url;
        }

        return texture;
    };
})();

import { PointerEventTypes, KeyboardEventTypes } from "@babylonjs/core";

export type VisiblityPropertyType =
    "number" | "string" | "boolean" |
    "Vector2" | "Vector3" | "Vector4" |
    "Color3" | "Color4" |
    "KeyMap";

/**
 * Sets the decorated member visible in the inspector.
 * @param type the property type.
 * @param name optional name to be shown in the editor's inspector.
 * @param defaultValue optional default value set in the TS code.
 */
export function visibleInInspector(type: VisiblityPropertyType, name?: string, defaultValue?: any): any {
    return (target: any, propertyKey: string | symbol) => {
        const ctor = target.constructor;
        ctor._InspectorValues = ctor._InspectorValues ?? [];
        ctor._InspectorValues.push({
            type,
            name: name ?? propertyKey.toString(),
            propertyKey: propertyKey.toString(),
            defaultValue,
        });
    };
}

/**
 * Sets the decorated member linked to a child node.
 * @param nodeName defines the name of the node in children to retrieve.
 */
export function fromChildren(nodeName?: string): any {
    return (target: any, propertyKey: string | symbol) => {
        const ctor = target.constructor;
        ctor._ChildrenValues = ctor._ChildrenValues ?? [];
        ctor._ChildrenValues.push({
            nodeName: nodeName ?? propertyKey.toString(),
            propertyKey: propertyKey.toString(),
        });
    };
}

/**
 * Sets the decorated member linked to a node in the scene.
 * @param nodeName defines the name of the node in the scene to retrieve.
 */
export function fromScene(nodeName?: string): any {
    return (target: any, propertyKey: string | symbol) => {
        const ctor = target.constructor;
        ctor._SceneValues = ctor._SceneValues ?? [];
        ctor._SceneValues.push({
            nodeName: nodeName ?? propertyKey.toString(),
            propertyKey: propertyKey.toString(),
        });
    }
}

/**
 * Sets the decorated member linked to a particle system which has the current Mesh attached.
 * @param particleSystemname the name of the attached particle system to retrieve.
 */
export function fromParticleSystems(particleSystemname?: string): any {
    return (target: any, propertyKey: string | symbol) => {
        const ctor = target.constructor;
        ctor._ParticleSystemValues = ctor._ParticleSystemValues ?? [];
        ctor._ParticleSystemValues.push({
            particleSystemName: particleSystemname ?? propertyKey.toString(),
            propertyKey: propertyKey.toString(),
        });
    }
}

/**
 * Sets the decorated member function to be called on the given pointer event is fired.
 * @param type the event type to listen to execute the decorated function.
 * @param onlyWhenMeshPicked defines wether or not the decorated function should be called only when the mesh is picked. default true.
 */
export function onPointerEvent(type: PointerEventTypes, onlyWhenMeshPicked: boolean = true): any {
    return (target: any, propertyKey: string | symbol) => {
        if (typeof(target[propertyKey]) !== "function") {
            throw new Error(`Decorated propery "${propertyKey.toString()}" in class "${target.constructor.name}" must be a function.`);
        }

        const ctor = target.constructor;
        ctor._PointerValues = ctor._PointerValues ?? [];
        ctor._PointerValues.push({
            type,
            onlyWhenMeshPicked,
            propertyKey: propertyKey.toString(),
        });
    };
}

/**
 * Sets the decorated member function to be called on the given keyboard key(s) is/are pressed.
 * @param key the key or array of key to listen to execute the decorated function.
 */
export function onKeyboardEvent(key: number | number[], type?: KeyboardEventTypes): any {
    return (target: any, propertyKey: string | symbol) => {
        if (typeof(target[propertyKey]) !== "function") {
            throw new Error(`Decorated propery "${propertyKey.toString()}" in class "${target.constructor.name}" must be a function.`);
        }

        const ctor = target.constructor;
        ctor._KeyboardValues = ctor._KeyboardValues ?? [];
        ctor._KeyboardValues.push({
            type,
            keys: Array.isArray(key) ? key : [key],
            propertyKey: propertyKey.toString(),
        });
    };
}

