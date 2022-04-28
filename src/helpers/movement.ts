import type { ICell } from '../models/ICell';
import { directionTypes } from '../enum/directions';
import { getNextRandomPosition } from './random';

export const levelRequired = 5;
/**
 * Change all the position of the cells
 * @param cells Collections of cells
 * @returns Returns a collection of cell with the position changed
 */
export const getNextPositions = (cells:ICell[], level:number) => {
    const minimunLevelRequired = level * levelRequired;
    return cells.map(c => {
        if (c.level >= minimunLevelRequired) return setNewPosition(c);
        return c;
    });
}
/**
 * Set a new position of a cell
 * @param cell The cell
 * @returns Returns a cell that was move
 */
const setNewPosition = (cell:ICell) => {
    const direction = getNextRandomPosition(cell);
    return positionBuilder[direction](cell);
}
/**
 * Changes the cell position
 */
const positionBuilder = {
    [directionTypes.down]: (cell:ICell) => {
        cell.top++;
        return cell;
    },
    [directionTypes.up]: (cell:ICell) => {
        cell.top--;
        return cell;
    },
    [directionTypes.left]: (cell:ICell) => {
        cell.left--;
        return cell;
    },
    [directionTypes.right]: (cell:ICell) => {
        cell.left++;
        return cell;
    },
}