import { defineStore } from 'pinia'
import { generateFoods, generateCells } from '../data/db';
import { getNextPositions } from '../helpers/movement';

export const useGameStore = defineStore({
    id: 'game',
    state: () => ({
        cells: generateCells(),
        foods: generateFoods()
    }),
    actions: {
        randomizePositions(){
            this.cells = getNextPositions(this.cells);
        }
    }
})
