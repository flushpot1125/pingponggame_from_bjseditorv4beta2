import { Mesh } from "@babylonjs/core";
import GameComponent from "./game";
export default class BallComponent extends Mesh {
    /**
     * Redefine the scene as GameComponent as the scene as a script attached to it.
     * @override
     */
    _scene: GameComponent;
    private _startPosition;
    private _startHeight;
    /**
     * Override constructor.
     * @warn do not fill.
     */
    protected constructor();
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    onInitialize(): void;
    /**
     * Called on the scene starts.
     */
    onStart(): void;
    /**
     * Called each frame.
     */
    onUpdate(): void;
    /**
     * Resets the ball component. Called typically when the player loses the ball.
     */
    reset(): void;
    /**
     * Applies the start impulse. This is called on the game is started when the user presses
     * the space key on the keyboard.
     */
    applyStartImpulse(): void;
}
