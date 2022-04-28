import { generateZoneColor } from '@/helpers/generation';
import type { IZone } from '@/models/IZone';
import { computed, ref } from 'vue';

/**
 * 
 * @param item The IZone item 
 * @returns Returns the style of zone
 */
export const useZone = (item:IZone) => {
    /**
     * 
     */
    const zone = ref(item);
    /**
     * Left and top position of the cell
     */
    const styleZone = computed(() => {
        const position = {
            left: zone.value.left * 50, top: zone.value.top * 50 
        };
        return {
            background: generateZoneColor(zone.value.zoneType),
            transform: `translate(${position.left}px, ${position.top}px)`,
        };
    });
    return {
        styleZone,
    }
}