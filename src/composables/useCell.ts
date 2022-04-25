import { computed, ref } from 'vue';
import { convertToRoman } from '../helpers/number';
import type { ICell } from '@/models/ICell';

/**
 * Custom hook use to set the information for a cell/player
 * @param item The ICell item 
 * @returns Returns the style of cell
 */
export const useCell = (item:ICell) => {
    /**
     * Reactive item
     */
    const cell = ref(item);
    /**
     * Current level of the cell
     */
    const currentLevel = computed(() => {
        return convertToRoman(cell.value.level);
    });
    return {
        currentLevel
    }
}