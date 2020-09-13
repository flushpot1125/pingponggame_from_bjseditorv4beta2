import { Mesh} from "@babylonjs/core";

import {removeHeart} from "./HUD";

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

let callOnceRemoveHeartsFlag = false;
export default class ball extends Mesh {

    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    private constructor() { 
      
    }
  
    
    /**
     * Called on the scene starts.
     */
    public onStart(): void {

        
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {       
        if( (this.position.x <-28)&& (callOnceRemoveHeartsFlag==false)){
            removeHeart();
            callOnceRemoveHeartsFlag=true;
        }
    }


}

export function setRemoveHeartsFlag(x:boolean){
    callOnceRemoveHeartsFlag =x;
}