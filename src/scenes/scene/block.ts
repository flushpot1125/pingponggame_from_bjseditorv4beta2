import { Mesh,PhysicsImpostor } from "@babylonjs/core";
import { fromScene} from "../tools";
import {addScore} from "./HUD";

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
export default class block extends Mesh {
    @fromScene("ball")
    _ball :Mesh;

    private callFlag : boolean = false;

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
                
        this.physicsImpostor = new PhysicsImpostor(this, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });

        // ...
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
                
        if ((this.intersectsMesh(this._ball))  && this.callFlag== false){
            this.callFlag=true;
            console.log("collisioned!");
           // this.dispose();
           this.blockDispose();
        }
        
        // ...
    }

    private async blockDispose():Promise<void>{
        console.log("started");
        const sleep =  (second) => new Promise(resolve => setTimeout(resolve, second ));
        await sleep(200);
        console.log("passed");
        this.dispose();
        addScore();
    }
    
}
