import { DirectionTypes } from '@/models/enums/DirectionTypes';
import { getNextRandomPosition } from './random';
import type { ICell } from '../models/ICell';

export const levelRequired = 5;
/**
 * Change all the position of the cells
 * @param cells Collections of cells
 * @returns Returns a collection of cell with the position changed
 */
export const getNextPositions = (cells:ICell[], level:number) => {
    const minimumLevelRequired = level * levelRequired;
    return cells.map(c => {
        if (c.level >= minimumLevelRequired) return setNewPosition(c);
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
    [DirectionTypes.down]: (cell:ICell) => {
        cell.top++;
        return cell;
    },
    [DirectionTypes.up]: (cell:ICell) => {
        cell.top--;
        return cell;
    },
    [DirectionTypes.left]: (cell:ICell) => {
        cell.left--;
        return cell;
    },
    [DirectionTypes.right]: (cell:ICell) => {
        cell.left++;
        return cell;
    },
}