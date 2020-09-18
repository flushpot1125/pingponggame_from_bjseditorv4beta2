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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@babylonjs/core");
var WallComponent = /** @class */ (function (_super) {
    __extends(WallComponent, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function WallComponent() {
        var _this = this;
        return _this;
    }
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    WallComponent.prototype.onInitialize = function () {
        // ...
    };
    /**
     * Called on the scene starts.
     */
    WallComponent.prototype.onStart = function () {
        this.physicsImpostor = new core_1.PhysicsImpostor(this, core_1.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1 });
        this.physicsImpostor.forceUpdate();
    };
    /**
     * Called each frame.
     */
    WallComponent.prototype.onUpdate = function () {
        // ...
    };
    return WallComponent;
}(core_1.Mesh));
exports.default = WallComponent;
//# sourceMappingURL=wall.js.map