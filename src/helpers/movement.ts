import { DirectionTypes } from '@/models/enums/DirectionTypes';
import { getAvailableDirections } from './direction';
import { Globals } from '@/global/globals';
import { ZoneTypes } from '../models/enums/ZoneTypes';
import type { ICell } from '../models/ICell';
import type { IZone } from '@/models/IZone';

/**
 * Change all the position of the cells
 * @param cells Collections of cells
 * @returns Returns a collection of cell with the position changed
 */
export const getNextPositions = (cells:ICell[], level:number, zones:IZone[]) => {
    const minimumLevelRequired = level * Globals.levelRequired,
        zonePositions = zones
            .filter(z => 
                z.zoneType == ZoneTypes.deadZoneBottom 
                || z.zoneType === ZoneTypes.deadZoneTop
            ).map(z => z.position);
    
    return cells.map(c => {
        if (c.level >= minimumLevelRequired) return checkNextMovement(c, zonePositions);
        return c;
    });
}
const checkNextMovement = (item:ICell, zonePositions:string[]) => {
    const cell = {...item},    
        directions = getAvailableDirections(cell),
        posiblePositions = directions.map((d) => {
            return positionBuilder[d](cell)
        });

    const positions = [...posiblePositions].filter(p => !zonePositions.includes(p.position)),
        position = positions[Math.floor(Math.random() * positions.length)];

    item.left = position.left;
    item.top = position.top;
    item.position = position.position;

    return item;
}
/**
 * Changes the cell position
 */
const positionBuilder = {
    [DirectionTypes.down]: (cell:ICell) => {
        return {
            top: cell.top + 1,
            left: cell.left,
            position: `${cell.left}${cell.top + 1}`
        };
    },
    [DirectionTypes.up]: (cell:ICell) => {
        return {
            top: cell.top - 1,
            left: cell.left,
            position: `${cell.left}${cell.top - 1}`
        };
    },
    [DirectionTypes.left]: (cell:ICell) => {
        return {
            top: cell.top,
            left: cell.left - 1,
            position: `${cell.left - 1}${cell.top}`
        };
    },
    [DirectionTypes.right]: (cell:ICell) => {
        return {
            top: cell.top,
            left: cell.left + 1,
            position: `${cell.left + 1}${cell.top}`
        };
    },
}