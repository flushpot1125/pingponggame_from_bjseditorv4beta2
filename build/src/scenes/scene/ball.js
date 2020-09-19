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
var BallComponent = /** @class */ (function (_super) {
    __extends(BallComponent, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function BallComponent() {
        var _this = this;
        _this._startPosition = null;
        _this._startHeight = 0;
        return _this;
    }
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    BallComponent.prototype.onInitialize = function () {
        this.physicsImpostor = new core_1.PhysicsImpostor(this, core_1.PhysicsImpostor.SphereImpostor, { mass: 1, friction: 0, restitution: 1 });
        this.physicsImpostor.sleep();
    };
    /**
     * Called on the scene starts.
     */
    BallComponent.prototype.onStart = function () {
        this._startPosition = this.position.clone();
        this._startHeight = this.position.y;
    };
    /**
     * Called each frame.
     */
    BallComponent.prototype.onUpdate = function () {
        this.position.y = this._startHeight;
        if (this.position.x < -30) {
            this._scene.retry();
        }
    };
    /**
     * Resets the ball component. Called typically when the player loses the ball.
     */
    BallComponent.prototype.reset = function () {
        //this.position.copyFrom(this._startPosition);
        this.position.copyFrom(this._player.getAbsolutePosition());
        this.physicsImpostor.setAngularVelocity(core_1.Vector3.Zero());
        this.physicsImpostor.setLinearVelocity(core_1.Vector3.Zero());
        this.physicsImpostor.sleep();
    };
    /**
     * Applies the start impulse. This is called on the game is started when the user presses
     * the space key on the keyboard.
     */
    BallComponent.prototype.applyStartImpulse = function () {
        this.physicsImpostor.wakeUp();
        this.applyImpulse(new core_1.Vector3(45, 0, 45), this.getAbsolutePosition());
    };
    __decorate([
        tools_1.fromScene("player")
    ], BallComponent.prototype, "_player", void 0);
    return BallComponent;
}(core_1.Mesh));
exports.default = BallComponent;
//# sourceMappingURL=ball.js.map