"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@babylonjs/core");
var gui_1 = require("@babylonjs/gui");
var tools_1 = require("../tools");
var GameComponent = /** @class */ (function (_super) {
    __extends(GameComponent, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function GameComponent() {
        var _this = this;
        /**
         * Defines the reference to the GUI advanced texture.
         */
        _this.gui = null;
        _this._collidedBlocksCount = 0;
        _this._gameMessageControl = null;
        _this._counterControl = null;
        _this._lifesStackControl = null;
        _this._isPlaying = true;
        return _this;
    }
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    GameComponent.prototype.onInitialize = function () {
        this.gui = gui_1.AdvancedDynamicTexture.CreateFullscreenUI("ui", true, this);
        // Create start game text
        this._gameMessageControl = new gui_1.TextBlock("startGame", "Please press space bar to start");
        this._gameMessageControl.color = "white";
        this._gameMessageControl.fontSize = 40;
        this._gameMessageControl.fontFamily = "Viga";
        this.gui.addControl(this._gameMessageControl);
        // Create blocks counter
        this._counterControl = new gui_1.TextBlock("counter", "Blocks 0 / 8");
        this._counterControl.color = "white";
        this._counterControl.fontSize = 24;
        this._counterControl.textHorizontalAlignment = gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        this._counterControl.textVerticalAlignment = gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        this._counterControl.paddingTop = 20;
        this._counterControl.fontFamily = "Viga";
        this.gui.addControl(this._counterControl);
        // Create lifes controls
        this._lifesStackControl = new gui_1.StackPanel("lifes");
        this._lifesStackControl.isVertical = false;
        this._lifesStackControl.adaptHeightToChildren = true;
        this._lifesStackControl.horizontalAlignment = gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        this._lifesStackControl.verticalAlignment = gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        this._lifesStackControl.top = 50;
        this.gui.addControl(this._lifesStackControl);
        for (var i = 0; i < 3; i++) {
            var lifeControl = new gui_1.Image("life", "./scenes/scene/files/heart.png");
            lifeControl.width = "64px";
            lifeControl.height = "64px";
            lifeControl.left = 100 * i;
            this._lifesStackControl.addControl(lifeControl);
        }
    };
    /**
     * Called on the scene starts.
     */
    GameComponent.prototype.onStart = function () {
        this._registerStartGameEvent();
    };
    /**
     * Called each frame.
     */
    GameComponent.prototype.onUpdate = function () {
        // ...
    };
    /**
     * THe player lose, let's retry :)
     */
    GameComponent.prototype.retry = function () {
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
        }
        else {
            //this._ball.reset();
            this._registerStartGameEvent();
        }
    };
    /**
     * Called on the ball intersects a block to udpate the current score.
     */
    GameComponent.prototype.updateScore = function () {
        this._collidedBlocksCount++;
        this._counterControl.text = "Blocks " + this._collidedBlocksCount + " / 8";
        if (this._collidedBlocksCount === 8) {
            this._gameMessageControl.isVisible = true;
            this._gameMessageControl.text = "You won!!";
        }
    };
    /**
     * Registers the keyboard event to start game.
     */
    GameComponent.prototype._registerStartGameEvent = function () {
        var _this = this;
        // Register the space keyboard event to start the game.
        var spaceObservable = this.onKeyboardObservable.add(function (ev) {
            if (ev.event.keyCode === 32) { // space bar
                _this._ball.reset();
                _this._ball.applyStartImpulse();
                _this.onKeyboardObservable.remove(spaceObservable);
                _this._gameMessageControl.isVisible = false;
            }
        });
    };
    __decorate([
        tools_1.fromScene("ball")
    ], GameComponent.prototype, "_ball", void 0);
    return GameComponent;
}(core_1.Scene));
exports.default = GameComponent;
//# sourceMappingURL=game.js.map