import { Mesh, Vector3,KeyboardEventTypes,Space, PhysicsImpostor, Scene,FreeCamera} from "@babylonjs/core";
import { visibleInInspector, onKeyboardEvent,fromScene} from "../tools";
import {_state, State, StateChange} from "./GameManager";
import {showMessages} from "./HUD";
import {setRemoveHeartsFlag} from "./ball";

//export let _p_playerPos:Vector3;

export default class p_player extends Mesh {


    @visibleInInspector("number", "Ball Force Factor", 10)
    private _ballForceFactor: number;

    @visibleInInspector("KeyMap", "Forward Key", "w".charCodeAt(0))
    private _forwardKey: number;

    @visibleInInspector("KeyMap", "Backward Key", "s".charCodeAt(0))
    private _backwardKey: number;

    @visibleInInspector("KeyMap", "Left Key", "a".charCodeAt(0))
    private _leftKey: number;

    @visibleInInspector("KeyMap", "Right Key", "d".charCodeAt(0))
    private _rightKey: number;


    @fromScene("ball")
    private _ball :Mesh;

    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    private constructor() { }

    /**
     * Called on the scene starts.
     */
    public onStart(): void {
        this.physicsImpostor = new PhysicsImpostor(this, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1.0 });
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
       
        // ...
    }

   //65 : A
    @onKeyboardEvent([65], KeyboardEventTypes.KEYDOWN)
    private _moveLeft():void{
        if( (this.position.z >= -21)&&(this.position.z <= 21)  ){
            this.translate( new Vector3(0,0,0.5),6,Space.WORLD);
           // console.log(this.position.z);
        }
    }

   //68 : D
    @onKeyboardEvent([68], KeyboardEventTypes.KEYDOWN)
    private _moveRight():void{
        if( (this.position.z >= -21)&&(this.position.z <= 21)  ){
         this.translate( new Vector3(0,0,-0.5),6,Space.WORLD);
       //  console.log(this.position.z);
        }
    }

    //32 : space
    @onKeyboardEvent([32], KeyboardEventTypes.KEYDOWN)
    private _select():void{
        if(_state == State.START){
            this._launchBall();
            StateChange(State.PLAYING);
            showMessages("");
            
        }else if (_state == State.LOSTHEART){
           this._launchBall();
            setRemoveHeartsFlag(false);
           StateChange(State.PLAYING);
        }
    }

    private _launchBall(): void {
        const ball = this._ball;
        ball.position.copyFrom(this.getAbsolutePosition());
        ball.position.x=-23;
        ball.physicsImpostor = new PhysicsImpostor(ball, PhysicsImpostor.SphereImpostor, { mass: 1, friction: 0, restitution: 1.0 });
        const force = this.getDirection(new Vector3(5, 0, 5));
        ball.applyImpulse(force, this.getAbsolutePosition());
    }

}

