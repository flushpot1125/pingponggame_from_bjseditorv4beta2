import { Mesh } from "@babylonjs/core";
export default class ball extends Mesh {
    /**
     * Override constructor.
     * @warn do not fill.
     */
    private constructor();
    /**
     * Called on the scene starts.
     */
    onStart(): void;
    /**
     * Called each frame.
     */
    onUpdate(): void;
}
export declare function setRemoveHeartsFlag(x: boolean): void;
