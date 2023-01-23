import { ref, watch } from 'vue';
// Store
import { useGameStore } from '../stores/game';
import { storeToRefs } from "pinia";

// Globals
import { Globals } from '@/global/globals';

/**
 * Custom grid hook for the app
 * @returns Returns a object for the grid
 */
export const useGrid = () => {
    const store = useGameStore(),
        { cells, foods, waiting, maxLevel, zones } = storeToRefs(store),
        { randomizePositions, checkPositions } = store,
        isWaiting = ref(waiting),
        currentMaxLevel = ref(maxLevel);

    watch(isWaiting, (value) => {
        if (!value) changePositions();
    });
    /**
     * Change position
     */
    const changePositions = async () => {
        const iterations = Math.floor(currentMaxLevel.value / Globals.levelRequired) + 1;
        const slots = new Array(iterations).fill("");
        for (let index = 0; index < slots.length; index++) {
            randomizePositions(index);
            await new Promise(resolve => setTimeout(resolve, Globals.gameSpeed));
            checkPositions();
        }
    }
    /**
     * Start game
     */
    const startGame = async () => {
        await new Promise(resolve => setTimeout(resolve, Globals.gameSpeed));
        changePositions();
    }
    startGame();
    return {
        cells,
        foods,
        zones
    }
}