import { ZoneTypes } from '@/models/enums/ZoneTypes';
import type { IZone } from '@/models/IZone';
import type { ICell } from '../models/ICell';
import type { IFood } from '../models/IFood';
import { groupBy } from './array';
import { Globals } from '@/global/globals';

/**
 * Check position of item in cell
 * @param newPosition A new position for a item
 * @param positions Current positions occupied in a grid
 * @returns Returns true or false if the position is available
 */
export const checkPosition = (newPosition: string, positions: string[]) => {
    return positions.includes(newPosition);
}
/**
 * Check all the positions of the cells each iteration of movement
 * @param cells The collection of cell in the grid
 * @param foods THe collection of food in the grid
 * @returns Returns the current position of all items
 */
export const checkAllCellsPositions = (cells: ICell[], foods: IFood[]) => {
    checkCellDuplicates(cells);
    for (let item of cells) {
        checkCurrentCell(item, foods);
    }
    return {
        cells,
        foods
    }
}
/**
 * Check current cell position and if it need to eat another cell
 * @param cell The current cell
 * @param foods The current foods collection available in the grid
 */
const checkCurrentCell = (cell: ICell, foods: IFood[]) => {
    const foodsPosition = foods.map(c => `${c.left}${c.top}`),
        cellPosition = `${cell.left}${cell.top}`,
        foodEat = foodsPosition.find(f => f === cellPosition);
    if (foodEat) {
        const food = foods.find(f => `${f.left}${f.top}` === cellPosition) as IFood;
        const foodIndex = foods.findIndex(f => f.id === food.id);
        cell.level++;
        foods.splice(foodIndex, 1);
    }
}
/**
 * Check if two or more cells or in the same exact position
 * @param cells List of cells
 */
const checkCellDuplicates = (cells: ICell[]) => {
    const items = cells.map(i => {
        i.position = `${i.left}${i.top}`;
        return i;
    });

    let duplicates: ICell[] = [];
    items.forEach((el, i) => {
        items.forEach((element, index) => {
            if (i === index) return null;
            if (element.position === el.position) {
                if (!duplicates.includes(el)) duplicates.push(el);
            }
        });
    });

    const groups = groupBy(duplicates, i => i.position);
    for (const [_, values] of Object.entries(groups)) {
        const tempArray = [...values];
        const sorted = tempArray.sort((a, b) => a.level - b.level);
        sorted.reverse();
        const [first] = sorted;
        const sameLevel = sorted.filter(i => i.level === first.level);
        const result = sameLevel[Math.floor(Math.random() * sameLevel.length)];

        const itemsToRemove = sorted.filter(s => s.id !== result.id);
        for (let item of itemsToRemove) {
            const cellIndex = cells.findIndex(f => f.id === item.id);
            cells.splice(cellIndex, 1);
        }
    }
}
/**
 * Add dead zones based on current round
 * @param round The current round of the game
 * @param zones All the zones available in the map
 * @returns Returns a list of zones for the grid
 */
export const addDeadZones = (round:number, zones:IZone[]) => {
    const itemsToSlice = round * (Globals.totalWidth + 1);
    let firstElements = zones.slice(0, itemsToSlice),
        lastElements = zones.slice(zones.length - itemsToSlice),
        elementIds = [...firstElements.map(f => f.id), ...lastElements.map(l => l.id)],
        newZones = zones.filter(z => !elementIds.includes(z.id)),
        lastZones = (Globals.totalWidth + 1) * 2;

    if (lastZones > newZones.length) return zones;

    firstElements = firstElements.map( e => {
        e.zoneType = ZoneTypes.deadZoneTop;
        return e;
    });

    lastElements = lastElements.map( e => {
        e.zoneType = ZoneTypes.deadZoneBottom;
        return e;
    });
    
    return [
        ...firstElements,
        ...newZones,
        ...lastElements
    ];
}
/**
 * Remove foods from dead zone
 * @param foods Current foods available in the grid
 * @param zones Current zones in the grid
 * @returns Returns a list of foods
 */
export const removeFoodFromDeadZones = (foods:IFood[], zones:IZone[]) => {
    const zonePositions = zones
        .filter(z =>
            z.zoneType == ZoneTypes.deadZoneBottom 
            || z.zoneType === ZoneTypes.deadZoneTop
        )
        .map(z => z.position);
    return foods.filter(f => !zonePositions.includes(`${f.left}${f.top}`));
}

