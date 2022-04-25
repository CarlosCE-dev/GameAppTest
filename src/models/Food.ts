import type { IFood } from "./IFood";

/**
 * food/Player in the grid
 */
export class Food implements IFood {
    /**
     * Basic identifier of the food
     */
    id: string;
    /**
     * The top position of the food in the grid
     */
    top: number;
    /**
     * The left position of the food in the grid
     */
    left: number;
    /**
     * Basic constructor
     * @param food The IFood interface
     */
    constructor(food:IFood) {
        this.id = food.id;
        this.top = food.top;
        this.left = food.left;
    }
}