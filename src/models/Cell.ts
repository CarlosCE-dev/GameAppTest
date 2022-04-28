import type { ICell } from "./ICell";

/**
 * Cell/Player in the grid
 */
export class Cell implements ICell {
    /**
     * Current level of player
     */
    level: number = 0;
    /**
     * Basic identifier of the cell
     */
    id: string;
    /**
     * The top position of the cell in the grid
     */
    top: number;
    /**
     * The left position of the cell in the grid
     */
    left: number;
    /**
     * The color of the cell
     */
    color: string;
    /**
     * The basic position of the cell
     */
    position: number;
    /**
     * Player name
     */
    name: string;
    /**
     * Basic constructor
     * @param cell The ICell interface
     */
    constructor(cell:ICell) {
        this.id = cell.id;
        this.top = cell.top;
        this.left = cell.left;
        this.color = cell.color;
        this.position = cell.position;
        this.name = cell.name;
    }
}