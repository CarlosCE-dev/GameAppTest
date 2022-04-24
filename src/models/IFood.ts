import type { IMovement } from './IMovement';
/**
 * Basic interface for a food
 */
export interface IFood  extends IMovement {
    /**
     * Basic identifier of the food
     */
     id: number;
}