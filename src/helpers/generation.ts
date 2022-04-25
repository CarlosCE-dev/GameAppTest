import { checkPosition } from './engine';
import { generateUniqueId, randomPositions } from '@/helpers/random';
import { getRandomColor } from './random';
import type { ICell } from '@/models/ICell';
import type { IFood } from '@/models/IFood';

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
            color: getRandomColor()
        }
        cells.push(cell);
    }

    return cells;
}

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
            color: 'ffffff'
        }
        foods.push(food);
    }

    return foods;
}

