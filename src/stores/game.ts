import { defineStore } from 'pinia'
import { generateData } from '../data/db';
import { getNextPositions } from '../helpers/movement';
import { checkAllCellsPositions } from '../helpers/engine';
import { generateFoods } from '../helpers/generation';

/**
 * Game store/logic for the app
 */
export const useGameStore = defineStore({
    id: 'game',
    state: () => ({
        ...generateData(),
    }),
    actions: {
        randomizePositions(){
            const foodTotal = this.foods.length
            let {cells, foods} = checkAllCellsPositions(getNextPositions(this.cells), this.foods);
            if (foodTotal !== foods.length) {
                foods = generateFoods(cells, foods, foodTotal - foods.length);
            }

            this.cells = cells;
            this.foods = foods;
        }
    }
})
