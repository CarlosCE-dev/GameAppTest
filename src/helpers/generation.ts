import { checkPosition } from './engine';
import { generateUniqueId, getRandomColor, randomPositions, totalHeight, totalWidth } from '@/helpers/random';
import { uniqueNamesGenerator, names, type Config } from 'unique-names-generator';
import type { ICell } from '@/models/ICell';
import type { IFood } from '@/models/IFood';
import type { IZone } from '@/models/IZone';
import { ZoneTypes } from '@/models/enums/ZoneTypes';

/**
 * Generate random cells for the grid
 * @param cells The current cells
 * @param cellLength The total length of items that will be added
 * @returns Returns the new array with new cells
 */
export const generateCells = (cells:ICell[], cellLength:number) => {
    const items = new Array(cellLength).fill("");
    
    for (let _ of items) {
        let left, top;
        const currentPositions = cells.map(c => `${c.left}${c.top}`);
        do {
            [left, top] = randomPositions(); 
        } while (checkPosition(`${left}${top}`, currentPositions));

        const randomColor = getRandomColor();
        const uniqueNamesConfig: Config = {
            dictionaries: [names],
            separator: '-',
            seed: randomColor,
        };
        const characterName: string = uniqueNamesGenerator(uniqueNamesConfig);
        const cell:ICell = {
            id: generateUniqueId(),
            top,
            left,
            level: 1,
            color: randomColor,
            position: characterName,
            name: characterName
        }
        cells.push(cell);
    }

    return cells;
}
/**
 * Generate foods for the grid
 * @param cells The current cells on the grid
 * @param foods The current foods on the grid
 * @param foodLength The total length of items that will be added
 * @returns Returns the new array with new foods
 */
export const generateFoods = (cells:ICell[], foods:IFood[] = [], foodLength:number) => {
    const items = new Array(foodLength).fill(""),
        currentCellsPosition = cells.map(c => `${c.left}${c.top}`);

    for (let _ of items) {
        let left:number, top:number;
        const currentPositions = [...currentCellsPosition, ...foods.map(c => `${c.left}${c.top}`)];
        do {
            [left, top] = randomPositions();
        } while (checkPosition(`${left}${top}`, currentPositions));

        const food:IFood = {
            id: generateUniqueId(),
            top,
            left,
        }
        foods.push(food);
    }

    return foods;
}
/**
 * Generate zones available in grid
 * @returns Returns a collection of zones available in the grid
 */
export const generateZones = () => {
    const heightArray = Array.from({ length: totalHeight + 1 }, ( _, k ) => k),
        widthArray = Array.from({ length: totalWidth + 1 }, ( _, k ) => k),
        zones:IZone[] = [];

    for (let top of heightArray) {
        for (let left of widthArray) {
            const zone:IZone = {
                id: generateUniqueId(),
                top,
                left,
                position: `${left}${top}`,
                zoneType: ZoneTypes.default
            }
            zones.push(zone);
        }
    }
    return zones;
}
/**
 * Get a color for a zone based on its zoneType
 * @param type ZoneType of a zone
 * @returns Returns a color based on its zoneType
 */
export const generateZoneColor = (type:ZoneTypes) => {
    return zoneColor[type];
}
/**
 * Colors available based on zoneType
 */
const zoneColor = {
    [ZoneTypes.default]: "#333",
    [ZoneTypes.deadZone] : 'red'
}
