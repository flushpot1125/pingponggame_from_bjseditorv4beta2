import { Scene } from "@babylonjs/core";
import { AdvancedDynamicTexture } from "@babylonjs/gui";
export default class GameComponent extends Scene {
    /**
     * Defines the reference to the GUI advanced texture.
     */
    gui: AdvancedDynamicTexture;
    private _ball;
    private _collidedBlocksCount;
    private _gameMessageControl;
    private _counterControl;
    private _lifesStackControl;
    private _isPlaying;
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
     * THe player lose, let's retry :)
     */
    retry(): void;
    /**
     * Called on the ball intersects a block to udpate the current score.
     */
    updateScore(): void;
    /**
     * Registers the keyboard event to start game.
     */
    private _registerStartGameEvent;
}
