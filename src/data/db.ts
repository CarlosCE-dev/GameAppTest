import { generateFoods, generateCells } from '../helpers/generation';
import type { ICell } from "@/models/ICell";
import type { IFood } from "@/models/IFood";
import type { IZone } from '@/models/IZone';

// Globals
import { Globals } from '@/global/globals';

/**
 * Generates random data for test usage
 * @returns A object with cells and foods
 */
export const generateData = () => {
    const cellsList:ICell[] = [], 
        foodsList:IFood[] = [],
        zonesList:IZone[] = [];
    
    const cells = generateCells(cellsList, Globals.cellItems);
    const foods = generateFoods(cells, foodsList, Globals.foodItems, zonesList);
    
    return {
        cells,
        foods
    }
}

