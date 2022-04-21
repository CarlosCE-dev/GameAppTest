import { computed, reactive, watch } from 'vue';
import type { ICell } from '@/models/ICell';


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