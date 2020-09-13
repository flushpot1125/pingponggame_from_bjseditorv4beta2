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
var tools_1 = require("../tools");
var GameManager_1 = require("./GameManager");
var HUD_1 = require("./HUD");
var ball_1 = require("./ball");
//export let _p_playerPos:Vector3;
var p_player = /** @class */ (function (_super) {
    __extends(p_player, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function p_player() {
        var _this = this;
        return _this;
    }
    /**
     * Called on the scene starts.
     */
    p_player.prototype.onStart = function () {
        this.physicsImpostor = new core_1.PhysicsImpostor(this, core_1.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
    };
    /**
     * Called each frame.
     */
    p_player.prototype.onUpdate = function () {
        // ...
    };
    //65 : A
    p_player.prototype._moveLeft = function () {
        if ((this.position.z >= -21) && (this.position.z <= 21)) {
            this.translate(new core_1.Vector3(0, 0, 0.5), 6, core_1.Space.WORLD);
            // console.log(this.position.z);
        }
    };
    //68 : D
    p_player.prototype._moveRight = function () {
        if ((this.position.z >= -21) && (this.position.z <= 21)) {
            this.translate(new core_1.Vector3(0, 0, -0.5), 6, core_1.Space.WORLD);
            //  console.log(this.position.z);
        }
    };
    //32 : space
    p_player.prototype._select = function () {
        if (GameManager_1._state == GameManager_1.State.START) {
            this._launchBall();
            GameManager_1.StateChange(GameManager_1.State.PLAYING);
            HUD_1.showMessages("");
        }
        else if (GameManager_1._state == GameManager_1.State.LOSTHEART) {
            this._launchBall();
            ball_1.setRemoveHeartsFlag(false);
            GameManager_1.StateChange(GameManager_1.State.PLAYING);
        }
    };
    p_player.prototype._launchBall = function () {
        var ball = this._ball;
        ball.position.copyFrom(this.getAbsolutePosition());
        ball.position.x = -23;
        ball.physicsImpostor = new core_1.PhysicsImpostor(ball, core_1.PhysicsImpostor.SphereImpostor, { mass: 1, friction: 0, restitution: 1.0 });
        var force = this.getDirection(new core_1.Vector3(5, 0, 5));
        ball.applyImpulse(force, this.getAbsolutePosition());
    };
    __decorate([
        tools_1.visibleInInspector("number", "Ball Force Factor", 10)
    ], p_player.prototype, "_ballForceFactor", void 0);
    __decorate([
        tools_1.visibleInInspector("KeyMap", "Forward Key", "w".charCodeAt(0))
    ], p_player.prototype, "_forwardKey", void 0);
    __decorate([
        tools_1.visibleInInspector("KeyMap", "Backward Key", "s".charCodeAt(0))
    ], p_player.prototype, "_backwardKey", void 0);
    __decorate([
        tools_1.visibleInInspector("KeyMap", "Left Key", "a".charCodeAt(0))
    ], p_player.prototype, "_leftKey", void 0);
    __decorate([
        tools_1.visibleInInspector("KeyMap", "Right Key", "d".charCodeAt(0))
    ], p_player.prototype, "_rightKey", void 0);
    __decorate([
        tools_1.fromScene("ball")
    ], p_player.prototype, "_ball", void 0);
    __decorate([
        tools_1.onKeyboardEvent([65], core_1.KeyboardEventTypes.KEYDOWN)
    ], p_player.prototype, "_moveLeft", null);
    __decorate([
        tools_1.onKeyboardEvent([68], core_1.KeyboardEventTypes.KEYDOWN)
    ], p_player.prototype, "_moveRight", null);
    __decorate([
        tools_1.onKeyboardEvent([32], core_1.KeyboardEventTypes.KEYDOWN)
    ], p_player.prototype, "_select", null);
    return p_player;
}(core_1.Mesh));
exports.default = p_player;
//# sourceMappingURL=p_player.js.map