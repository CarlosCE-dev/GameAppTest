import { randomPositions } from "@/helpers/random";
import type { ICell } from "@/models/ICell";
import type { IFood } from "@/models/IFood";

const cellItems = 5,
    foodItems = 3;

export const generateCells = () => {
    let id = 1;
    return new Array(cellItems).fill("").map(() => {
        const [left, top] = randomPositions();  
        const cell:ICell = {
            id,
            top,
            left
        }
        id++
        return cell;
    });
}
export const generateFoods = () => {
    let id = 1;
    return new Array(foodItems).fill("").map(() => {
        const [left, top] = randomPositions();  
        const food:IFood = {
            id,
            top,
            left
        }
        id++;
        return food;
    });
}
