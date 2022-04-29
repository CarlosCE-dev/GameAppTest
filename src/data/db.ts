import { generateFoods, generateCells } from '../helpers/generation';
import type { ICell } from "@/models/ICell";
import type { IFood } from "@/models/IFood";

// Globals
import { Globals } from '@/global/globals';

/**
 * Generates random data for test usage
 * @returns A object with cells and foods
 */
export const generateData = () => {
    const cellsList:ICell[] = [], 
        foodsList:IFood[] = [];
    
    const cells = generateCells(cellsList, Globals.cellItems);
    const foods = generateFoods(cells, foodsList, Globals.foodItems);
    
    return {
        cells,
        foods
    }
}

