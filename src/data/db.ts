import { generateFoods, generateCells } from '../helpers/generation';
import type { ICell } from "@/models/ICell";
import type { IFood } from "@/models/IFood";

const cellItems = 40,
    foodItems = 15;

/**
 * Generates random data for test usage
 * @returns A object with cells and foods
 */
export const generateData = () => {
    const cellsList:ICell[] = [], 
        foodsList:IFood[] = [];
    
    const cells = generateCells(cellsList, cellItems);
    const foods = generateFoods(cellsList, foodsList, foodItems);

    return {
        cells,
        foods
    }
}

