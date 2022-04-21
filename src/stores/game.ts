import type { ICell } from '@/models/ICell'
import { defineStore } from 'pinia'
import { getNextPositions } from '../helpers/movement';

const cells:ICell[] = [
    {
        id: 1,
        top: 0,
        left: 0
    },
    {
        id: 2,
        top: 1,
        left: 2
    },
    {
        id: 3,
        top: 9,
        left: 9
    },
    {
        id: 4,
        top: 15,
        left: 9
    },
    {
        id: 5,
        top: 4,
        left: 4
    },
    {
        id: 6,
        top: 7,
        left: 7
    },
    {
        id: 7,
        top: 9,
        left: 2
    }
];

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
