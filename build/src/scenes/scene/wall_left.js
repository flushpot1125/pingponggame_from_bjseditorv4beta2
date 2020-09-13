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
/**
 * This represents a script that is attached to a node in the editor.
 * Available nodes are:
 *      - Meshes
 *      - Lights
 *      - Cameas
 *      - Transform nodes
 *
 * You can extend the desired class according to the node type.
 * Example:
 *      export default class MyMesh extends Mesh {
 *          public onUpdate(): void {
 *              this.rotation.y += 0.04;
 *          }
 *      }
 * The functions "onStart" and "onUpdate" are called automatically.
 */
var wall_left = /** @class */ (function (_super) {
    __extends(wall_left, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function wall_left() {
        var _this = this;
        return _this;
    }
    /**
     * Called on the scene starts.
     */
    wall_left.prototype.onStart = function () {
        this.physicsImpostor = new core_1.PhysicsImpostor(this, core_1.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        // ...
    };
    /**
     * Called each frame.
     */
    wall_left.prototype.onUpdate = function () {
        // ...
    };
    return wall_left;
}(core_1.Mesh));
exports.default = wall_left;
//# sourceMappingURL=wall_left.js.map