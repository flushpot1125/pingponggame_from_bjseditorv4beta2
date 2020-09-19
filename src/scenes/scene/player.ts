import { Mesh, KeyboardEventTypes, PhysicsImpostor } from "@babylonjs/core";
import { onKeyboardEvent,fromScene } from "../tools";

export default class PlayerComponent extends Mesh {
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    protected constructor() { }

    @fromScene("wall_left")
    private _wall_left: Mesh;

    @fromScene("wall_right")
    private _wall_right: Mesh;
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    public onInitialize(): void {
        // ...
    }

    /**
     * Called on the scene starts.
     */
    public onStart(): void {
        this.physicsImpostor = new PhysicsImpostor(this, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1 });
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        // ...
    }

    /**
     * Moves the player on the left
     */
    @onKeyboardEvent(65, KeyboardEventTypes.KEYDOWN)
    protected moveLeft(): void {
        if (this.intersectsMesh(this._wall_left)){
        }else{
            this.position.z += 5;
        }
    }

    /**
     * Moves the player on the right.
     */
    @onKeyboardEvent(68, KeyboardEventTypes.KEYDOWN)
    protected moveRight(): void {
        if (this.intersectsMesh(this._wall_right)){
        }else{
            this.position.z -= 5;
        }
    }
}
