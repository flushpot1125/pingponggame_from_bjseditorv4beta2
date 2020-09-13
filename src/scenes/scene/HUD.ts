//import {   } from "@babylonjs/core";
import {AdvancedDynamicTexture,TextBlock,StackPanel,Image} from "@babylonjs/gui";
import {State,StateChange} from "./GameManager";
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

let blockCountMessages;
let colliedcnt:number;
let heartcnt:number;

let hearts=[];

let messages;

export default class HUD extends Node {
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init

   // private _playerUI;
    private constructor() { }


   
    /**
     * Called on the scene starts.
     */
    public onStart(): void {

        const playerUI = AdvancedDynamicTexture.CreateFullscreenUI("UI");

        console.log(hearts);
      //  hearts.length=3;
      let index =0;
      do{
        console.log(index);
        hearts[index] = new Image("heart0","../scenes/scene/files/heart.png");
        hearts[index].width =0.07;
        hearts[index].height="50px";
        hearts[index].horizontalAlignment = Image.HORIZONTAL_ALIGNMENT_RIGHT;
        hearts[index].verticalAlignment = Image.VERTICAL_ALIGNMENT_TOP;
        hearts[index].top ="50px";
        let leftnum:number;
        leftnum = -10-index*60;
        console.log(leftnum);
        hearts[index].left= leftnum+  "px";
        playerUI.addControl(hearts[index]);
        index++;
      }while(index<3);

      heartcnt=3;

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
        const stackPanel = new StackPanel();
        stackPanel.height = "100%";
        stackPanel.width = "100%";
        stackPanel.top = "14px";
        stackPanel.verticalAlignment = 0;
        playerUI.addControl(stackPanel);

        blockCountMessages = new TextBlock();
        blockCountMessages.name = "block count";
        blockCountMessages.textHorizontalAlignment = TextBlock.HORIZONTAL_ALIGNMENT_CENTER;
        blockCountMessages.fontSize = "48px";
        blockCountMessages.color = "white";
        blockCountMessages.text = "blocks 0/8";
        blockCountMessages.resizeToFit = true;
        blockCountMessages.height = "96px";
        blockCountMessages.width = "220px";
        blockCountMessages.fontFamily = "Viga";
        stackPanel.addControl(blockCountMessages);

        colliedcnt=0;

        messages = new TextBlock();
        messages.name = "game messages";
        messages.textHorizontalAlignment = TextBlock.HORIZONTAL_ALIGNMENT_CENTER;
        messages.fontSize = "60px";
        messages.color = "white";
        messages.text = "Press Space key";
        messages.resizeToFit = true;
        messages.height = "150px";
        messages.width = "220px";
        messages.fontFamily = "Viga";
        stackPanel.addControl(messages);



        // ...
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        // ...
    }


}

export function addScore(): void{
    colliedcnt++;
    blockCountMessages.text="blocks"+ colliedcnt+"/8";
    if(colliedcnt == 8){
        StateChange(State.GAMECLEAR);
        showMessages("Congratulations!! CLEAR!!Reload to play again");
    }
}

export function removeHeart(){
    hearts[heartcnt-1].alpha=0;
    heartcnt--;
    if(heartcnt !=0){
        StateChange(State.LOSTHEART);
    }
    if(heartcnt ==0){
        StateChange(State.GAMEOVER);
        showMessages("You lose. Reload to play again");
    }
}

export function showMessages(x:string){
    messages.text=x;
}

