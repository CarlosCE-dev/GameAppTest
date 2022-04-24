import { randomPositions } from "@/helpers/random";
import type { ICell } from "@/models/ICell";
import type { IFood } from "@/models/IFood";
import { checkPosition } from '../helpers/engine';

const cellItems = 20,
    foodItems = 5;

export const generateData = () => {
    const cells:ICell[] = [], 
        foods:IFood[] = [];
    let items = new Array(cellItems).fill("");

    for (let _ of items) {
        let left, top;
        const currentPositions = cells.map(c => parseInt(`${c.left}${c.top}`));
        do {
            [left, top] = randomPositions(); 
        } while (checkPosition(parseInt(`${left}${top}`), currentPositions));

        const cell:ICell = {
            id: cells.length + 1,
            top,
            left,
            level: 1
        }
        cells.push(cell);
    }

    items = new Array(foodItems).fill("");
    const currentCellsPosition = cells.map(c => parseInt(`${c.left}${c.top}`));

    for (let _ of items) {
        let left, top;
        const currentPositions = [...currentCellsPosition, ...foods.map(c => parseInt(`${c.left}${c.top}`))];
        do {
            [left, top] = randomPositions();
        } while (checkPosition(parseInt(`${left}${top}`), currentPositions));

        const food:IFood = {
            id: foods.length + 1,
            top,
            left
        }
        foods.push(food);
    }

    return {
        cells,
        foods
    }
}

