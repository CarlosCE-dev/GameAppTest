import { checkPosition } from './engine';
import { generateUniqueId, randomPositions } from '@/helpers/random';
import { getRandomColor } from './random';
import type { ICell } from '@/models/ICell';
import type { IFood } from '@/models/IFood';

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
        const currentPositions = cells.map(c => parseInt(`${c.left}${c.top}`));
        do {
            [left, top] = randomPositions(); 
        } while (checkPosition(parseInt(`${left}${top}`), currentPositions));

        const cell:ICell = {
            id: generateUniqueId(),
            top,
            left,
            level: 1,
            color: getRandomColor(),
            position: 0,
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
export const generateFoods = (cells:ICell[], foods:IFood[], foodLength:number) => {
    const items = new Array(foodLength).fill(""),
        currentCellsPosition = cells.map(c => parseInt(`${c.left}${c.top}`));

    for (let _ of items) {
        let left, top;
        const currentPositions = [...currentCellsPosition, ...foods.map(c => parseInt(`${c.left}${c.top}`))];
        do {
            [left, top] = randomPositions();
        } while (checkPosition(parseInt(`${left}${top}`), currentPositions));

        const food:IFood = {
            id: generateUniqueId(),
            top,
            left,
        }
        foods.push(food);
    }

    return foods;
}

