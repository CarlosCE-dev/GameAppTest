import { computed, reactive } from 'vue';
import type { ICell } from '@/models/ICell';

/**
 * Custom hook use to set the position of the cell in the grid
 * @param item The ICell item 
 * @returns Returns the style of cell
 */
export const useCell = (item:ICell) => {
    const cell = reactive(item);

    const styleCell = computed(() => {
        const position = {
            left: cell.left * 50, top: cell.top * 50 
        };
        return {
            left: `${position.left}px`,
            top: `${position.top}px`
        };
    });

    return {
        styleCell
    }
}