import { defineStore } from 'pinia'
import { generateData } from '../data/db';
import { getNextPositions } from '../helpers/movement';
import { checkAllCellsPositions } from '../helpers/engine';

export const useGameStore = defineStore({
    id: 'game',
    state: () => ({
        ...generateData(),
    }),
    actions: {
        randomizePositions(){
            const {cells, foods} = checkAllCellsPositions(getNextPositions(this.cells), this.foods);
            this.cells = cells;
            this.foods = foods;
        }
    }
})
