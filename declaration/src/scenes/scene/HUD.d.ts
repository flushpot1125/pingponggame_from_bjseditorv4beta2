export default class HUD extends Node {
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
export declare function addScore(): void;
export declare function removeHeart(): void;
export declare function showMessages(x: string): void;
