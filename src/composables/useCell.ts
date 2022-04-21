import { computed, reactive } from 'vue';
import type { ICell } from '@/models/ICell';


export const useCell = (cell:ICell) => {
    const position = computed(() => {
        return { left: cell.left * 50, top: cell.top * 50 }
    });

    const styleCell = reactive({
        left: `${position.value.left}px`,
        top: `${position.value.top}px`
    })

    return {
        styleCell
    }
}