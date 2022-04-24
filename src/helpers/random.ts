import type { ICell } from '../models/ICell';
import { directionTypes } from '../enum/directions';
import { shuffleArray } from './array';

/**
 * Global variables
 */
const totalHeight = 17,
    totalWidth = 9;
/**
 * Gets next random position of cell
 * @param cell 
 * @returns 
 */
export const getNextRandomPosition = (cell:ICell) => {
    const directions = getDirectionsAvailable(cell);
    shuffleArray(directionTypes);
    return directions[Math.floor(Math.random() * directions.length)];
}
/**
 * Get a direction available for a cell
 * @param cell The cell
 * @returns A new direction type available
 */
const getDirectionsAvailable = (cell:ICell) => {
    if (cell.left === 0) 
        return decideLeft(cell.top);
    else if (cell.left === totalWidth) 
        return decideRight(cell.top);
    else if (cell.top === 0)
        return decideTop(cell.left);
    else if (cell.top === totalHeight) 
        return decideDown(cell.left);
    else 
        return [directionTypes.right, directionTypes.down, directionTypes.up, directionTypes.left];
}
/**
 * Decides position on left
 * @param top The current top position
 * @returns A new position movement
 */
const decideLeft = (top:number) => {
    if (top === 0)
        return [directionTypes.right, directionTypes.down];
    else if (top === totalHeight)
        return [directionTypes.right, directionTypes.up];
    else 
        return  [directionTypes.right, directionTypes.down, directionTypes.up];
}
/**
 * Decides position on right
 * @param top The current top position
 * @returns A new position movement
 */
const decideRight = (top:number) => {
    if (top === 0)
        return [directionTypes.left, directionTypes.down];
    else if (top === totalHeight)
        return [directionTypes.left, directionTypes.up];
    else 
        return  [directionTypes.left, directionTypes.down, directionTypes.up];
}
/**
 * Decides position on tio
 * @param left The current left position
 * @returns A new position movement
 */
const decideTop = (left:number) => {
    if (left === 0)
        return [directionTypes.down, directionTypes.left];
    else if (left === totalWidth)
        return [directionTypes.down, directionTypes.right];
    else 
        return  [directionTypes.down, directionTypes.right, directionTypes.left];
}
/**
 * Decides position on down
 * @param left The current left position
 * @returns A new position movement
 */
const decideDown = (left:number) => {
    if (left === 0)
        return [directionTypes.up, directionTypes.left];
    else if (left === totalWidth)
        return [directionTypes.up, directionTypes.right];
    else 
        return  [directionTypes.up, directionTypes.right, directionTypes.left];
}