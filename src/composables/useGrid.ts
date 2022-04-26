import { ref } from 'vue';
// Store
import { useGameStore } from '../stores/game';
import { storeToRefs } from "pinia";

// Helpers
import { totalHeight, totalWidth } from '@/helpers/random';

export const useGrid = () => {

    const store = useGameStore();
    const totalCells = (totalHeight + 1) * (totalWidth + 1);         
    const { cells, foods, waiting } = storeToRefs(store);
    const { randomizePositions, checkPositions } = store;
    const isWaiting = ref(waiting);
    const gridStyles = {
        gridTemplateColumns: `repeat(${totalWidth + 1}, 50px)`
    }

    setInterval(() => {
        if (!isWaiting.value) {
            randomizePositions();
            setTimeout(() => {
                checkPositions();
            }, 400);
        }
    }, 2000);

    return {
        cells,
        foods,
        totalCells,
        gridStyles
    }
}