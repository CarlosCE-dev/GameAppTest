import { defineStore } from 'pinia'
import { generateData } from '../data/db';
import { getNextPositions } from '../helpers/movement';
import { addDeadZones, checkAllCellsPositions } from '../helpers/engine';
import { generateFoods, generateZones } from '../helpers/generation';
import { Globals } from '@/global/globals';

/**
 * Game store/logic for the app
 */
export const useGameStore = defineStore({
    id: 'game',
    state: () => ({
        ...generateData(),
        waiting: false,
        zones: generateZones(),
        turnZones: 0,
        stage: 0,
    }),
    actions: {
        /**
         * Randomizes positions in the grid
         * @param currentLevel The current level
         */
        randomizePositions(currentLevel:number){
            this.waiting = true;
            this.cells = getNextPositions(this.cells, currentLevel, this.zones);
        },
        /**
         * Check positions of the cell
         */
        checkPositions(){
            const foodTotal = this.foods.length;
            let {cells, foods} = checkAllCellsPositions(this.cells, this.foods);
            if (foodTotal !== foods.length) {
                foods = generateFoods(cells, foods, foodTotal - foods.length);
            }
    
            this.cells = cells;
            this.foods = foods;
            this.waiting = false;
            this.turnZones++;

            const turn = Math.floor(this.turnZones / Globals.itemsPerRound);
            if (turn > 0) {
                this.turnZones = 0;
                this.stage++
                this.zones = addDeadZones(this.stage, this.zones);
            }
        },
    },
    getters: {
        /**
         * Returns max level of the cells
         * @param state Current state
         * @returns The max level in number
         */
        maxLevel: (state) => {
            const items = [...state.cells];
            items.sort((a, b) => a.level - b.level);
            items.reverse();
            return items[0].level;
        }
    }
})
