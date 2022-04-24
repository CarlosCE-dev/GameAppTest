import type { IMovement } from './IMovement';

/**
 * Cell/Player in the grid
 */
export class Movement implements IMovement {
    /**
     * The top position of the cell in the grid
     */
    top: number;
    /**
     * The left position of the cell in the grid
     */
    left: number;
    /**
     * Basic constructor
     * @param movement The IMovement interface
     */
    constructor(movement:IMovement) {
        this.top = movement.top;
        this.left = movement.left;
    }
}