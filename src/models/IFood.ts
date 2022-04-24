/**
 * Basic interface for a food
 */
export interface IFood {
    /**
     * Basic identifier of the food
     */
     id: number;
     /**
      * The top position of the food in the grid
      */
     top: number;
     /**
      * The left position of the food in the grid
      */
     left: number;
}