import type { ZoneTypes } from './enums/ZoneTypes';
import type { IMovement } from './IMovement';
/**
 * Basic interface for a cell
 */
export interface IZone extends IMovement {
    /**
     * Basic identifier of the cell
     */
    id: string;
    /**
     * The basic position of a cell
     */
    position: string;
    /**
     * The current level of the cell
     */
    zoneType: ZoneTypes;
}