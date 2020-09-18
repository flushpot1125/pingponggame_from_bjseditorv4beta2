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
var BlockComponent = /** @class */ (function (_super) {
    __extends(BlockComponent, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function BlockComponent() {
        var _this = this;
        return _this;
    }
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    BlockComponent.prototype.onInitialize = function () {
        this.physicsImpostor = new core_1.PhysicsImpostor(this, core_1.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1 });
        this.physicsImpostor.forceUpdate();
    };
    /**
     * Called on the scene starts.
     */
    BlockComponent.prototype.onStart = function () {
        var _this = this;
        // Register event to know when the block collides with the ball.
        var onPhysicsCollideFunc;
        this.physicsImpostor.registerOnPhysicsCollide(this._ball.physicsImpostor, onPhysicsCollideFunc = function () {
            _this.physicsImpostor.unregisterOnPhysicsCollide(_this._ball.physicsImpostor, onPhysicsCollideFunc);
            _this.physicsImpostor.dispose();
            _this._scene.updateScore();
            _this.setEnabled(false);
        });
    };
    /**
     * Called each frame.
     */
    BlockComponent.prototype.onUpdate = function () {
        // ...
    };
    __decorate([
        tools_1.fromScene("ball")
    ], BlockComponent.prototype, "_ball", void 0);
    return BlockComponent;
}(core_1.Mesh));
exports.default = BlockComponent;
//# sourceMappingURL=block.js.map