import { Mesh } from "@babylonjs/core";
export default class PlayerComponent extends Mesh {
    /**
     * Override constructor.
     * @warn do not fill.
     */
    protected constructor();
    private _wall_left;
    private _wall_right;
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    onInitialize(): void;
    /**
     * Called on the scene starts.
     */
    onStart(): void;
    /**
     * Called each frame.
     */
    onUpdate(): void;
    /**
     * Moves the player on the left
     */
    protected moveLeft(): void;
    /**
     * Moves the player on the right.
     */
    protected moveRight(): void;
}
