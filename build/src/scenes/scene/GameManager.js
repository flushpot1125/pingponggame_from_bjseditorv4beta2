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
var State;
(function (State) {
    State[State["START"] = 0] = "START";
    State[State["PLAYING"] = 1] = "PLAYING";
    State[State["LOSTHEART"] = 2] = "LOSTHEART";
    State[State["GAMECLEAR"] = 3] = "GAMECLEAR";
    State[State["GAMEOVER"] = 4] = "GAMEOVER";
})(State = exports.State || (exports.State = {}));
exports._state = 0;
var _ball;
var _p_player;
var GameManeger = /** @class */ (function (_super) {
    __extends(GameManeger, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function GameManeger() {
        var _this = this;
        return _this;
    }
    /**
     * Called on the scene starts.
     */
    GameManeger.prototype.onStart = function () {
        _ball = this.ball;
        // ...
    };
    /**
     * Called each frame.
     */
    GameManeger.prototype.onUpdate = function () {
        // ...
    };
    __decorate([
        tools_1.fromScene("ball")
    ], GameManeger.prototype, "ball", void 0);
    __decorate([
        tools_1.fromScene("p_player")
    ], GameManeger.prototype, "p_player", void 0);
    return GameManeger;
}(core_1.Node));
exports.default = GameManeger;
function StartGame() {
    if (exports._state == State.START) {
    }
}
exports.StartGame = StartGame;
//
function RestartGame() {
    if (exports._state == State.PLAYING) {
    }
}
exports.RestartGame = RestartGame;
//_stateを進める
function StateChange(x) {
    exports._state = x;
}
exports.StateChange = StateChange;
//# sourceMappingURL=GameManager.js.map