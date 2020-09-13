import { Mesh } from "@babylonjs/core";
export default class p_player extends Mesh {
    private _ballForceFactor;
    private _forwardKey;
    private _backwardKey;
    private _leftKey;
    private _rightKey;
    private _ball;
    /**
     * Override constructor.
     * @warn do not fill.
     */
    private constructor();
    /**
     * Called on the scene starts.
     */
    onStart(): void;
    /**
     * Called each frame.
     */
    onUpdate(): void;
    private _moveLeft;
    private _moveRight;
    private _select;
    private _launchBall;
}
