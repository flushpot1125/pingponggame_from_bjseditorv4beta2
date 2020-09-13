import { Node } from "@babylonjs/core";
import {Mesh} from "@babylonjs/core";
import { fromScene} from "../tools";


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
export enum State { START = 0, PLAYING = 1, LOSTHEART = 2, GAMECLEAR=3,GAMEOVER = 4 }
export let _state: number = 0;
let _ball : Mesh;
let _p_player : Mesh;


export default class GameManeger extends Node {

    @fromScene("ball")
    private ball :Mesh;

    @fromScene("p_player")
    private p_player: Mesh;
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    private constructor() { }

    /**
     * Called on the scene starts.
     */
    public onStart(): void {
        _ball = this.ball;
        // ...
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        // ...
    }
}

export function StartGame(){
    if(_state == State.START){
    }

}

//
export function RestartGame(){
    if(_state == State.PLAYING){
    }
}



//_stateを進める
export function StateChange(x:number){
    _state = x;
}
