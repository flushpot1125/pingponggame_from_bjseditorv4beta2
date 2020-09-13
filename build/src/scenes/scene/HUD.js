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
//import {   } from "@babylonjs/core";
var gui_1 = require("@babylonjs/gui");
var GameManager_1 = require("./GameManager");
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
var blockCountMessages;
var colliedcnt;
var heartcnt;
var hearts = [];
var messages;
var HUD = /** @class */ (function (_super) {
    __extends(HUD, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    // private _playerUI;
    function HUD() {
        var _this = this;
        return _this;
    }
    /**
     * Called on the scene starts.
     */
    HUD.prototype.onStart = function () {
        var playerUI = gui_1.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        console.log(hearts);
        //  hearts.length=3;
        var index = 0;
        do {
            console.log(index);
            hearts[index] = new gui_1.Image("heart0", "../scenes/scene/files/heart.png");
            hearts[index].width = 0.07;
            hearts[index].height = "50px";
            hearts[index].horizontalAlignment = gui_1.Image.HORIZONTAL_ALIGNMENT_RIGHT;
            hearts[index].verticalAlignment = gui_1.Image.VERTICAL_ALIGNMENT_TOP;
            hearts[index].top = "50px";
            var leftnum = void 0;
            leftnum = -10 - index * 60;
            console.log(leftnum);
            hearts[index].left = leftnum + "px";
            playerUI.addControl(hearts[index]);
            index++;
        } while (index < 3);
        heartcnt = 3;
        /*
                const heart = new Image("heart0","../scenes/scene/files/heart.png");
                heart.width =0.07;
                heart.height="50px";
                heart.horizontalAlignment = Image.HORIZONTAL_ALIGNMENT_RIGHT;
                heart.verticalAlignment = Image.VERTICAL_ALIGNMENT_TOP;
                heart.top ="50px";
                heart.left="-10px";
                playerUI.addControl(heart);
        
                const heart1 = new Image("heart1","../scenes/scene/files/heart.png");
                heart1.width =0.07;
                heart1.height="50px";
                heart1.horizontalAlignment = Image.HORIZONTAL_ALIGNMENT_RIGHT;
                heart1.verticalAlignment = Image.VERTICAL_ALIGNMENT_TOP;
                heart1.top ="50px";
                heart1.left="-70px";
                playerUI.addControl(heart1);
        
                const heart2 = new Image("heart2","../scenes/scene/files/heart.png");
                heart2.width =0.07;
                heart2.height="50px";
                heart2.horizontalAlignment = Image.HORIZONTAL_ALIGNMENT_RIGHT;
                heart2.verticalAlignment = Image.VERTICAL_ALIGNMENT_TOP;
                heart2.top ="50px";
                heart2.left="-130px";
                playerUI.addControl(heart2);
        */
        var stackPanel = new gui_1.StackPanel();
        stackPanel.height = "100%";
        stackPanel.width = "100%";
        stackPanel.top = "14px";
        stackPanel.verticalAlignment = 0;
        playerUI.addControl(stackPanel);
        blockCountMessages = new gui_1.TextBlock();
        blockCountMessages.name = "block count";
        blockCountMessages.textHorizontalAlignment = gui_1.TextBlock.HORIZONTAL_ALIGNMENT_CENTER;
        blockCountMessages.fontSize = "48px";
        blockCountMessages.color = "white";
        blockCountMessages.text = "blocks 0/8";
        blockCountMessages.resizeToFit = true;
        blockCountMessages.height = "96px";
        blockCountMessages.width = "220px";
        blockCountMessages.fontFamily = "Viga";
        stackPanel.addControl(blockCountMessages);
        colliedcnt = 0;
        messages = new gui_1.TextBlock();
        messages.name = "game messages";
        messages.textHorizontalAlignment = gui_1.TextBlock.HORIZONTAL_ALIGNMENT_CENTER;
        messages.fontSize = "60px";
        messages.color = "white";
        messages.text = "Press Space key";
        messages.resizeToFit = true;
        messages.height = "150px";
        messages.width = "220px";
        messages.fontFamily = "Viga";
        stackPanel.addControl(messages);
        // ...
    };
    /**
     * Called each frame.
     */
    HUD.prototype.onUpdate = function () {
        // ...
    };
    return HUD;
}(Node));
exports.default = HUD;
function addScore() {
    colliedcnt++;
    blockCountMessages.text = "blocks" + colliedcnt + "/8";
    if (colliedcnt == 8) {
        GameManager_1.StateChange(GameManager_1.State.GAMECLEAR);
        showMessages("Congratulations!! CLEAR!!Reload to play again");
    }
}
exports.addScore = addScore;
function removeHeart() {
    hearts[heartcnt - 1].alpha = 0;
    heartcnt--;
    if (heartcnt != 0) {
        GameManager_1.StateChange(GameManager_1.State.LOSTHEART);
    }
    if (heartcnt == 0) {
        GameManager_1.StateChange(GameManager_1.State.GAMEOVER);
        showMessages("You lose. Reload to play again");
    }
}
exports.removeHeart = removeHeart;
function showMessages(x) {
    messages.text = x;
}
exports.showMessages = showMessages;
//# sourceMappingURL=HUD.js.map