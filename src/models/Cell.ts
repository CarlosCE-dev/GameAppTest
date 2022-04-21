import type { ICell } from "./ICell";

export class Cell implements ICell {
    id: number;
    top: number;
    left: number;
    /**
     *
     */
    constructor(cell:ICell) {
        this.id = cell.id;
        this.top = cell.top;
        this.left = cell.left;
    }
}