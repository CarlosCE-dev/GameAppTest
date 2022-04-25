import type { ICell } from '../models/ICell';
import type { IFood } from '../models/IFood';


export const checkPosition = ( newPosition: number, positions:number[] ) => {
    return positions.includes(newPosition);
}

export const checkAllCellsPositions = (cells:ICell[], foods: IFood[]) => {
    for (let item of cells) {
        checkCurrentCell(item, cells, foods);
    }
    return {
        cells,
        foods
    }
}

const checkCurrentCell = (cell:ICell, cells:ICell[], foods: IFood[]) => {
    const foodsPosition = foods.map(c => parseInt(`${c.left}${c.top}`)),
        cellPosition = parseInt(`${cell.left}${cell.top}`),
        foodEat = foodsPosition.find(f => f === cellPosition);
    if (foodEat) {
        const food = foods.find(f => parseInt(`${f.left}${f.top}`) === foodEat) as IFood;
        const foodIndex = foods.findIndex(f => f.id === food.id);
        cell.level++;
        foods.splice(foodIndex, 1);
    }
}
