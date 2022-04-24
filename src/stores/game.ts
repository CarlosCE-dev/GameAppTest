import { cells } from '@/data/db';
import { defineStore } from 'pinia'
import { getNextPositions } from '../helpers/movement';

export const useGameStore = defineStore({
    id: 'game',
    state: () => ({
        cells: cells
    }),
    actions: {
        randomizePositions(){
            this.cells = getNextPositions(this.cells);
        }
    }
})
