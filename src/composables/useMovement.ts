import { computed, ref } from 'vue';
import type { IMovement } from '../models/IMovement';

/**
 * Custom hook use to set the position of a item in the grid
 * @param item The ICell item 
 * @returns Returns the style of cell
 */
export const useMovement = (item:IMovement) => {
    /**
     * Reactive item
     */
    const movement = ref(item);
    /**
     * Left and top position of the cell
     */
    const styleCell = computed(() => {
        const position = {
            left: movement.value.left * 50, top: movement.value.top * 50 
        };
        return {
            transform: `translate(${position.left}px, ${position.top}px)`,
        };
    });
    return {
        styleCell,
    }
}