import { Node } from "@babylonjs/core";
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
export declare enum State {
    START = 0,
    PLAYING = 1,
    LOSTHEART = 2,
    GAMECLEAR = 3,
    GAMEOVER = 4
}
export declare let _state: number;
export default class GameManeger extends Node {
    private ball;
    private p_player;
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
export declare function StartGame(): void;
export declare function RestartGame(): void;
export declare function StateChange(x: number): void;
