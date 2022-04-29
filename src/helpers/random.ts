import { DirectionTypes } from '../models/enums/DirectionTypes';
import { shuffleArray } from './array';
import type { ICell } from '../models/ICell';
/**
 * Global variables
 */
export const totalHeight = 15,
    totalWidth = 5;
/**
 * Gets next random position of cell
 * @param cell 
 * @returns 
 */
export const getNextRandomPosition = (cell: ICell) => {
    const directions = getDirectionsAvailable(cell);
    shuffleArray(DirectionTypes);
    return directions[Math.floor(Math.random() * directions.length)];
}
/**
 * Get a new random position on the grid
 * @returns Returns a new random position
 */
export const randomPositions = () => {
    return [
        Math.floor(Math.random() * (totalWidth - 0 + 1)) + 0,
        Math.floor(Math.random() * (totalHeight - 0 + 1)) + 0
    ];
}
/**
 * Generates a random color
 * @returns Returns a new color in hex format
 */
export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
/**
 * Generate unique id
 * @returns Returns the new unique id
 */
export const generateUniqueId = () => {
  return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
};
/**
 * Get a direction available for a cell
 * @param cell The cell
 * @returns A new direction type available
 */
const getDirectionsAvailable = (cell: ICell) => {
    if (cell.left === 0)
        return decideLeft(cell.top);
    else if (cell.left === totalWidth)
        return decideRight(cell.top);
    else if (cell.top === 0)
        return decideTop(cell.left);
    else if (cell.top === totalHeight)
        return decideDown(cell.left);
    else
        return [DirectionTypes.right, DirectionTypes.down, DirectionTypes.up, DirectionTypes.left];
}
/**
 * Decides position on left
 * @param top The current top position
 * @returns A new position movement
 */
const decideLeft = (top: number) => {
    if (top === 0)
        return [DirectionTypes.right, DirectionTypes.down];
    else if (top === totalHeight)
        return [DirectionTypes.right, DirectionTypes.up];
    else
        return [DirectionTypes.right, DirectionTypes.down, DirectionTypes.up];
}
/**
 * Decides position on right
 * @param top The current top position
 * @returns A new position movement
 */
const decideRight = (top: number) => {
    if (top === 0)
        return [DirectionTypes.left, DirectionTypes.down];
    else if (top === totalHeight)
        return [DirectionTypes.left, DirectionTypes.up];
    else
        return [DirectionTypes.left, DirectionTypes.down, DirectionTypes.up];
}
/**
 * Decides position on tio
 * @param left The current left position
 * @returns A new position movement
 */
const decideTop = (left: number) => {
    if (left === 0)
        return [DirectionTypes.down, DirectionTypes.left];
    else if (left === totalWidth)
        return [DirectionTypes.down, DirectionTypes.right];
    else
        return [DirectionTypes.down, DirectionTypes.right, DirectionTypes.left];
}
/**
 * Decides position on down
 * @param left The current left position
 * @returns A new position movement
 */
const decideDown = (left: number) => {
    if (left === 0)
        return [DirectionTypes.up, DirectionTypes.left];
    else if (left === totalWidth)
        return [DirectionTypes.up, DirectionTypes.right];
    else
        return [DirectionTypes.up, DirectionTypes.right, DirectionTypes.left];
}