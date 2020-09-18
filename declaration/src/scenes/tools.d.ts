/**
 * Generated by the Babylon.JS Editor v4.0.0-beta.7
 */
import { Scene, Node } from "@babylonjs/core";
export declare type NodeScriptConstructor = (new (...args: any[]) => Node);
export declare type GraphScriptConstructor = (new (scene: Scene) => any);
export declare type ScriptMap = {
    [index: string]: {
        IsGraph?: boolean;
        default: (new (...args: any[]) => NodeScriptConstructor | GraphScriptConstructor);
    };
};
export interface IScript {
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    onInitialize?(): void;
    /**
     * Called on the scene starts.
     */
    onStart?(): void;
    /**
     * Called each frame.
     */
    onUpdate?(): void;
    /**
     * Called on a message has been received and sent from a graph.
     * @param message defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    onMessage?(name: string, data: any, sender: any): void;
}
/**
 * Attaches all available scripts on nodes of the given scene.
 * @param scene the scene reference that contains the nodes to attach scripts.
 */
export declare function attachScripts(scriptsMap: ScriptMap, scene: Scene): void;
/**
 * Configures and attaches the post-processes of the given scene.
 * @param scene the scene where to create the post-processes and attach to its cameras.
 * @param rootUrl the root Url where to find extra assets used by pipelines. Should be the same as the scene.
 */
export declare function configurePostProcesses(scene: Scene, rootUrl?: string): void;
import { PointerEventTypes, KeyboardEventTypes } from "@babylonjs/core";
export declare type VisiblityPropertyType = "number" | "string" | "boolean" | "Vector2" | "Vector3" | "Vector4" | "Color3" | "Color4" | "KeyMap";
/**
 * Sets the decorated member visible in the inspector.
 * @param type the property type.
 * @param name optional name to be shown in the editor's inspector.
 * @param defaultValue optional default value set in the TS code.
 */
export declare function visibleInInspector(type: VisiblityPropertyType, name?: string, defaultValue?: any): any;
/**
 * Sets the decorated member linked to a child node.
 * @param nodeName defines the name of the node in children to retrieve.
 */
export declare function fromChildren(nodeName?: string): any;
/**
 * Sets the decorated member linked to a node in the scene.
 * @param nodeName defines the name of the node in the scene to retrieve.
 */
export declare function fromScene(nodeName?: string): any;
/**
 * Sets the decorated member linked to a particle system which has the current Mesh attached.
 * @param particleSystemname the name of the attached particle system to retrieve.
 */
export declare function fromParticleSystems(particleSystemname?: string): any;
/**
 * Sets the decorated member function to be called on the given pointer event is fired.
 * @param type the event type to listen to execute the decorated function.
 * @param onlyWhenMeshPicked defines wether or not the decorated function should be called only when the mesh is picked. default true.
 */
export declare function onPointerEvent(type: PointerEventTypes, onlyWhenMeshPicked?: boolean): any;
/**
 * Sets the decorated member function to be called on the given keyboard key(s) is/are pressed.
 * @param key the key or array of key to listen to execute the decorated function.
 */
export declare function onKeyboardEvent(key: number | number[], type?: KeyboardEventTypes): any;
