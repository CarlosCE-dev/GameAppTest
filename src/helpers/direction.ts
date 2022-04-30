import { DirectionTypes } from "@/models/enums/DirectionTypes";
import { Globals } from "@/global/globals";
import type { ICell } from "@/models/ICell";

/**
 * Gets next random position of cell
 * @param cell 
 * @returns 
 */
 export const getAvailableDirections = (cell: ICell) => {
    return getDirectionsAvailable(cell);
}
/**
 * Get a direction available for a cell
 * @param cell The cell
 * @returns A new direction type available
 */
 const getDirectionsAvailable = (cell: ICell) => {
    if (cell.left === 0)
        return decideLeft(cell.top);
    else if (cell.left === Globals.totalWidth)
        return decideRight(cell.top);
    else if (cell.top === 0)
        return decideTop(cell.left);
    else if (cell.top === Globals.totalHeight)
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
    else if (top === Globals.totalHeight)
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
    else if (top === Globals.totalHeight)
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
    else if (left === Globals.totalWidth)
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
    else if (left === Globals.totalWidth)
        return [DirectionTypes.up, DirectionTypes.right];
    else
        return [DirectionTypes.up, DirectionTypes.right, DirectionTypes.left];
}