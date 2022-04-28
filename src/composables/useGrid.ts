import { ref, watch } from 'vue';
// Store
import { useGameStore } from '../stores/game';
import { storeToRefs } from "pinia";

// Helpers
import { totalHeight, totalWidth } from '@/helpers/random';
import { levelRequired } from '@/helpers/movement';

export const useGrid = () => {

    const store = useGameStore();
    const totalCells = (totalHeight + 1) * (totalWidth + 1);         
    const { cells, foods, waiting, maxLevel } = storeToRefs(store);
    const { randomizePositions, checkPositions } = store;
    const isWaiting = ref(waiting);
    const currentMaxLevel = ref(maxLevel);
    const gridStyles = {
        gridTemplateColumns: `repeat(${totalWidth + 1}, 50px)`
    }

    watch(isWaiting, (value) => {
        if (!value) changePositions();
    });

    const changePositions = async () => {
        const iterations = Math.floor(currentMaxLevel.value / levelRequired) + 1;
        const slots = new Array(iterations).fill("");
        for (let index = 0; index < slots.length; index++) {
            randomizePositions(index);
            await new Promise(resolve => setTimeout(resolve, 1000));
            checkPositions();
        }
    }
    
    changePositions();

    return {
        cells,
        foods,
        totalCells,
        gridStyles
    }
}