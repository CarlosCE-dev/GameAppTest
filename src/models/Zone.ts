import type { ZoneTypes } from './enums/ZoneTypes';
import type { IZone } from './IZone';

/**
 * Zone type in the grid
 */
export class Zone implements IZone {
    /**
     * Basic identifier of the cell
     */
    id: string;
    /**
     * The top position of the cell in the grid
     */
    top: number;
    /**
     * The left position of the cell in the grid
     */
    left: number;
    /**
     * The basic position of the cell
     */
    position: string;
    /**
     * The zone type of the cell
     */
    zoneType: ZoneTypes;
    /**
     * Basic constructor
     * @param movement The IMovement interface
     */
    constructor(zone:IZone) {
        this.id = zone.id;
        this.top = zone.top;
        this.left = zone.left;
        this.position = zone.position;
        this.zoneType = zone.zoneType;
    }
}