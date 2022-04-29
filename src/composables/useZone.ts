import { generateZoneColor } from '@/helpers/generation';
import type { IZone } from '@/models/IZone';
import { computed, ref } from 'vue';

/**
 * Custom hook for a Zone item
 * @param item The IZone item 
 * @returns Returns the style of zone
 */
export const useZone = (item:IZone) => {
    /**
     * Current zone of the map
     */
    const zone = ref(item);
    /**
     * Custom style of the zone
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