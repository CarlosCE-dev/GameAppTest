/**
 * Basic interface for movement
 */
export interface IMovement {
    /**
     * The top position of the item in the grid
     */
    top: number;
    /**
     * The left position of the item in the grid
     */
    left: number;
}
/**
 * Basic position interface
 */
export interface IPosition extends IMovement{
    /**
     * The full position of the item
     */
    position: number;
}