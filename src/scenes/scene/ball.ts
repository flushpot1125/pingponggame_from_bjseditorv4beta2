import { Mesh, PhysicsImpostor, Vector3 } from "@babylonjs/core";
import GameComponent from "./game";
import { fromScene } from "../tools";

export default class BallComponent extends Mesh {
    /**
     * Redefine the scene as GameComponent as the scene as a script attached to it.
     * @override
     */
    public _scene: GameComponent;

    private _startPosition: Vector3 = null;
    private _startHeight: number = 0;

    @fromScene("player")
    private _player: Mesh;

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
        this.physicsImpostor = new PhysicsImpostor(this, PhysicsImpostor.SphereImpostor, { mass: 1, friction: 0, restitution: 1 });
        this.physicsImpostor.sleep();
    }

    /**
     * Called on the scene starts.
     */
    public onStart(): void {
        this._startPosition = this.position.clone();
        this._startHeight = this.position.y;
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        this.position.y = this._startHeight;

        if (this.position.x < -30) {
            this._scene.retry();
        }
    }

    /**
     * Resets the ball component. Called typically when the player loses the ball.
     */
    public reset(): void {
        //this.position.copyFrom(this._startPosition);
        this.position.copyFrom(this._player.getAbsolutePosition());
        this.physicsImpostor.setAngularVelocity(Vector3.Zero());
        this.physicsImpostor.setLinearVelocity(Vector3.Zero());
        this.physicsImpostor.sleep();
    }

    /**
     * Applies the start impulse. This is called on the game is started when the user presses
     * the space key on the keyboard.
     */
    public applyStartImpulse(): void {
        this.physicsImpostor.wakeUp();
        this.applyImpulse(new Vector3(45, 0, 45), this.getAbsolutePosition());
    }
}
