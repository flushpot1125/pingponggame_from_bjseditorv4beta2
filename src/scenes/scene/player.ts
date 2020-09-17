import { Mesh, KeyboardEventTypes, PhysicsImpostor } from "@babylonjs/core";
import { onKeyboardEvent } from "../tools";

export default class PlayerComponent extends Mesh {
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    protected constructor() { }

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
        this.position.z += 5;
    }

    /**
     * Moves the player on the right.
     */
    @onKeyboardEvent(68, KeyboardEventTypes.KEYDOWN)
    protected moveRight(): void {
        this.position.z -= 5;
    }
}
