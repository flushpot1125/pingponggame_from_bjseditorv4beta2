import { Scene } from "@babylonjs/core";
import { AdvancedDynamicTexture, TextBlock, Control, Image, StackPanel } from "@babylonjs/gui";

import { fromScene } from "../tools";

import BallComponent from "./ball";

export default class GameComponent extends Scene {
    /**
     * Defines the reference to the GUI advanced texture.
     */
    public gui: AdvancedDynamicTexture = null;

    @fromScene("ball")
    private _ball: BallComponent;

    private _collidedBlocksCount: number = 0;

    private _gameMessageControl: TextBlock = null;
    private _counterControl: TextBlock = null;

    private _lifesStackControl: StackPanel = null;

    private _isPlaying: boolean = true;

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
        this.gui = AdvancedDynamicTexture.CreateFullscreenUI("ui", true, this);

        // Create start game text
        this._gameMessageControl = new TextBlock("startGame", "Please press space bar to start");
        this._gameMessageControl.color = "white";
        this._gameMessageControl.fontSize = 40;
        this.gui.addControl(this._gameMessageControl);

        // Create blocks counter
        this._counterControl = new TextBlock("counter", "Blocks 0 / 8");
        this._counterControl.color = "white";
        this._counterControl.fontSize = 24;
        this._counterControl.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        this._counterControl.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        this._counterControl.paddingTop = 20;
        this.gui.addControl(this._counterControl);

        // Create lifes controls
        this._lifesStackControl = new StackPanel("lifes");
        this._lifesStackControl.isVertical = false;
        this._lifesStackControl.adaptHeightToChildren = true;
        this._lifesStackControl.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        this._lifesStackControl.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        this._lifesStackControl.top = 50;
        this.gui.addControl(this._lifesStackControl);

        for (let i = 0; i < 3; i++) {
            const lifeControl = new Image("life", "./scenes/scene/files/heart.png");
            lifeControl.width = "64px";
            lifeControl.height = "64px";
            lifeControl.left = 100 * i;
            this._lifesStackControl.addControl(lifeControl);
        }
    }

    /**
     * Called on the scene starts.
     */
    public onStart(): void {
        this._registerStartGameEvent();
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        // ...
    }

    /**
     * THe player lose, let's retry :)
     */
    public retry(): void {
        if (!this._isPlaying) {
            return;
        }

        this._gameMessageControl.isVisible = true;

        // Remove one life
        this._lifesStackControl.removeControl(this._lifesStackControl.children[0]);

        // Check lose the game
        if (!this._lifesStackControl.children.length) {
            this._gameMessageControl.isVisible = true;
            this._gameMessageControl.text = "You lose!";
            
            this._isPlaying = false;
        } else {
            this._ball.reset();
            this._registerStartGameEvent();
        }
    }

    /**
     * Called on the ball intersects a block to udpate the current score.
     */
    public updateScore(): void {
        this._collidedBlocksCount++;
        this._counterControl.text = `Blocks ${this._collidedBlocksCount} / 8`;

        if (this._collidedBlocksCount === 8) {
            this._gameMessageControl.isVisible = true;
            this._gameMessageControl.text = "You won!!";
        }
    }

    /**
     * Registers the keyboard event to start game.
     */
    private _registerStartGameEvent(): void {
        // Register the space keyboard event to start the game.
        const spaceObservable = this.onKeyboardObservable.add((ev) => {
            if (ev.event.keyCode === 32) { // space bar
                this._ball.applyStartImpulse();
                this.onKeyboardObservable.remove(spaceObservable);

                this._gameMessageControl.isVisible = false;
            }
        });
    }
}
