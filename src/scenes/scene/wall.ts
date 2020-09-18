import { Mesh, PhysicsImpostor } from "@babylonjs/core";

export default class WallComponent extends Mesh {
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
        this.physicsImpostor.forceUpdate();
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        // ...
    }
}
