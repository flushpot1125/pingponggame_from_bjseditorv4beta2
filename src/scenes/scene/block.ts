import { Mesh, PhysicsImpostor } from "@babylonjs/core";

import { fromScene } from "../tools";

import BallComponent from "./ball";
import GameComponent from "./game";

export default class BlockComponent extends Mesh {
    /**
     * Redefine the scene as GameComponent as the scene as a script attached to it.
     * @override
     */
    public _scene: GameComponent;

    @fromScene("ball")
    private _ball: BallComponent;
    
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
        this.physicsImpostor = new PhysicsImpostor(this, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1 });
        this.physicsImpostor.forceUpdate();
    }

    /**
     * Called on the scene starts.
     */
    public onStart(): void {
        // Register event to know when the block collides with the ball.
        let onPhysicsCollideFunc: () => void;
        this.physicsImpostor.registerOnPhysicsCollide(this._ball.physicsImpostor, onPhysicsCollideFunc = () => {
            this.physicsImpostor.unregisterOnPhysicsCollide(this._ball.physicsImpostor, onPhysicsCollideFunc);
            this.physicsImpostor.dispose();

            this._scene.updateScore();

            this.setEnabled(false);
        });
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        // ...
    }
}
