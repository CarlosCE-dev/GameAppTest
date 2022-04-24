import type { IMovement } from './IMovement';
/**
 * Basic interface for a cell
 */
export interface ICell extends IMovement {
    /**
     * Basic identifier of the cell
     */
     id: number;
     /**
      * The current level of the cell
      */
     level: number;
}