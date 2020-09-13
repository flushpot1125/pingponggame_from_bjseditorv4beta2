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
var blockGenerator = /** @class */ (function (_super) {
    __extends(blockGenerator, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function blockGenerator() {
        var _this = this;
        return _this;
        //let position = this.position;
    }
    /*
        get getName(): string{
            return this.name;
        }
    */
    /**
     * Called on the scene starts.
     */
    blockGenerator.prototype.onStart = function () {
        this.scene = this.camera.getScene();
        /*
        this._block00.physicsImpostor = new PhysicsImpostor(this._block00, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        this._block01.physicsImpostor = new PhysicsImpostor(this._block01, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        this._block02.physicsImpostor = new PhysicsImpostor(this._block02, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        this._block03.physicsImpostor = new PhysicsImpostor(this._block03, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        this._block10.physicsImpostor = new PhysicsImpostor(this._block10, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        this._block11.physicsImpostor = new PhysicsImpostor(this._block11, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        this._block12.physicsImpostor = new PhysicsImpostor(this._block12, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
        this._block13.physicsImpostor = new PhysicsImpostor(this._block13, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
       */
        /*
        const block0 = Mesh.CreateBox("block0", 1);
      //  console.log(block0.name);
        block0.position = new Vector3(23,1,21);
        block0.scaling = new Vector3(2,2,4);
        block0.physicsImpostor = new PhysicsImpostor(block0, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
       

        const block1 = Mesh.CreateBox("block1", 1);
        block1.position = new Vector3(23,1,16);
        block1.scaling = new Vector3(2,2,4);
        block1.physicsImpostor = new PhysicsImpostor(block1, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
       


        const block2 = Mesh.CreateBox("block2", 1);
        block2.position = new Vector3(23,1,11);
        block2.scaling = new Vector3(2,2,4);
        block2.physicsImpostor = new PhysicsImpostor(block2, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
       


        const block3 = Mesh.CreateBox("block3", 1);
        block3.position = new Vector3(23,1,6);
        block3.scaling = new Vector3(2,2,4);
        block3.physicsImpostor = new PhysicsImpostor(block3, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
       

        //console.log(block.position);
        */
        // ...
    };
    /**
     * Called each frame.
     */
    blockGenerator.prototype.onUpdate = function () {
        // ...
    };
    __decorate([
        tools_1.fromScene("block00")
    ], blockGenerator.prototype, "_block00", void 0);
    __decorate([
        tools_1.fromScene("block01")
    ], blockGenerator.prototype, "_block01", void 0);
    __decorate([
        tools_1.fromScene("block02")
    ], blockGenerator.prototype, "_block02", void 0);
    __decorate([
        tools_1.fromScene("block03")
    ], blockGenerator.prototype, "_block03", void 0);
    __decorate([
        tools_1.fromScene("block10")
    ], blockGenerator.prototype, "_block10", void 0);
    __decorate([
        tools_1.fromScene("block11")
    ], blockGenerator.prototype, "_block11", void 0);
    __decorate([
        tools_1.fromScene("block12")
    ], blockGenerator.prototype, "_block12", void 0);
    __decorate([
        tools_1.fromScene("block13")
    ], blockGenerator.prototype, "_block13", void 0);
    __decorate([
        tools_1.fromScene("Camera")
    ], blockGenerator.prototype, "camera", void 0);
    return blockGenerator;
}(core_1.Mesh));
exports.default = blockGenerator;
function getName() {
    return "test string";
}
exports.getName = getName;
//# sourceMappingURL=blockGenerator.js.map