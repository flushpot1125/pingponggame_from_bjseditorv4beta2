import { Mesh } from "@babylonjs/core";
/**
 * This represents a script that is attached to a node in the editor.
 * Available nodes are:
 *      - Meshes
 *      - Lights
 *      - Cameas
 *      - Transform nodes
 *
 * You can extend the desired class according to the node type.
 * Example:
 *      export default class MyMesh extends Mesh {
 *          public onUpdate(): void {
 *              this.rotation.y += 0.04;
 *          }
 *      }
 * The functions "onStart" and "onUpdate" are called automatically.
 */
export default class blockGenerator extends Mesh {
    private _block00;
    private _block01;
    private _block02;
    private _block03;
    private _block10;
    private _block11;
    private _block12;
    private _block13;
    private camera;
    private scene;
    /**
     * Override constructor.
     * @warn do not fill.
     */
    private constructor();
    /**
     * Called on the scene starts.
     */
    onStart(): void;
    /**
     * Called each frame.
     */
    onUpdate(): void;
}
export declare function getName(): String;
