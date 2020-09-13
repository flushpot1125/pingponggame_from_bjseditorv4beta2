import { Mesh, Vector3,PhysicsImpostor,FreeCamera,Scene } from "@babylonjs/core";
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
export default class blockGenerator extends Mesh{
    @fromScene("block00")
    private _block00 :Mesh;

    @fromScene("block01")
    private _block01 :Mesh;

    @fromScene("block02")
    private _block02 :Mesh;

    @fromScene("block03")
    private _block03 :Mesh;

    @fromScene("block10")
    private _block10 :Mesh;

    @fromScene("block11")
    private _block11 :Mesh;

    @fromScene("block12")
    private _block12 :Mesh;

    @fromScene("block13")
    private _block13 :Mesh;

    @fromScene("Camera")
    private camera: FreeCamera;

    private scene : Scene;

    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    private constructor() { 
        //let position = this.position;
    }
/*
    get getName(): string{
        return this.name;
    }
*/
    /**
     * Called on the scene starts.
     */
    public onStart(): void {
        this.scene = this.camera.getScene();

        /*
        this._block00.physicsImpostor = new PhysicsImpostor(this._block00, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        this._block01.physicsImpostor = new PhysicsImpostor(this._block01, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        this._block02.physicsImpostor = new PhysicsImpostor(this._block02, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        this._block03.physicsImpostor = new PhysicsImpostor(this._block03, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        this._block10.physicsImpostor = new PhysicsImpostor(this._block10, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        this._block11.physicsImpostor = new PhysicsImpostor(this._block11, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        this._block12.physicsImpostor = new PhysicsImpostor(this._block12, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        this._block13.physicsImpostor = new PhysicsImpostor(this._block13, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
       */

        /*
        const block0 = Mesh.CreateBox("block0", 1);
      //  console.log(block0.name);
        block0.position = new Vector3(23,1,21);
        block0.scaling = new Vector3(2,2,4);
        block0.physicsImpostor = new PhysicsImpostor(block0, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
       

        const block1 = Mesh.CreateBox("block1", 1);
        block1.position = new Vector3(23,1,16);
        block1.scaling = new Vector3(2,2,4);
        block1.physicsImpostor = new PhysicsImpostor(block1, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
       


        const block2 = Mesh.CreateBox("block2", 1);
        block2.position = new Vector3(23,1,11);
        block2.scaling = new Vector3(2,2,4);
        block2.physicsImpostor = new PhysicsImpostor(block2, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
       


        const block3 = Mesh.CreateBox("block3", 1);
        block3.position = new Vector3(23,1,6);
        block3.scaling = new Vector3(2,2,4);
        block3.physicsImpostor = new PhysicsImpostor(block3, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
       

        //console.log(block.position);
        */
        // ...
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        // ...
    }
}

export function getName(): String{
    return "test string";
}