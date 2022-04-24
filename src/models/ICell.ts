/**
 * Basic interface for a cell
 */
export interface ICell {
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
}