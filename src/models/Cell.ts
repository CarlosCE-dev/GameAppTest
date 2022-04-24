import type { ICell } from "./ICell";

/**
 * Cell/Player in the grid
 */
export class Cell implements ICell {
    /**
     * Basic identifier of the cell
     */
    id: number;
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
     * @param cell The ICell interface
     */
    constructor(cell:ICell) {
        this.id = cell.id;
        this.top = cell.top;
        this.left = cell.left;
    }
}