import type { ICell } from '../models/ICell';
import type { IFood } from '../models/IFood';
import type { IPosition } from '../models/IMovement';
import { groupBy } from './array';

/**
 * Check position of item in cell
 * @param newPosition 
 * @param positions 
 * @returns 
 */
export const checkPosition = ( newPosition: number, positions:number[] ) => {
    return positions.includes(newPosition);
}
/**
 * Check all the positions of the cells
 * @param cells 
 * @param foods 
 * @returns 
 */
export const checkAllCellsPositions = (cells:ICell[], foods: IFood[]) => {
    checkCellDuplicates(cells);
    for (let item of cells) {
        checkCurrentCell(item, cells, foods);
    }
    return {
        cells,
        foods
    }
}
/**
 * 
 * @param cell 
 * @param cells 
 * @param foods 
 */
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
const checkCellDuplicates = (cells:ICell[]) => {
    const items = cells.map(i => {
        i.position = parseInt(`${i.left}${i.top}`);
        return i;
    });

    let duplicates:ICell[] = [];
    items.forEach((el, i) => {
        items.forEach((element, index) => {
          if (i === index) return null;
          if (element.position === el.position) {
            if (!duplicates.includes(el)) duplicates.push(el);
          }
        });
    });

    const groups = groupBy(duplicates, i => i.position);
    for (const [_, values] of Object.entries(groups)) {
        const sorted = values.sort((a, b) => a.level - b.level);
        sorted.reverse();
        const [first] = sorted;
        const sameLevel = sorted.filter(i => i.level === first.level);
        console.log(sameLevel);
        console.log(items.length)
        const result = sameLevel[Math.floor(Math.random()*sameLevel.length)];

        const itemsToRemove = sorted.filter(s => s.id !== result.id);

        console.log("================================================================================================================");
        console.log(`Cell winner: ${result.id}`);
        console.log(`Level: ${result.level}`);
        console.log("===========LOSERS===========");
        for (let item of itemsToRemove){
            console.info(`Cell: ${item.id}`);
            console.info(`Level: ${item.level}`);
            const cellIndex = cells.findIndex(f => f.id === item.id);
            cells.splice(cellIndex, 1);
            console.log("-----")
        }
        console.log("===========End===========");
    }
}

