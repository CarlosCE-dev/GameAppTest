import type { ICell } from '../models/ICell';
import { directionTypes } from '../enum/directions';
import { getNextRandomPosition } from './random';

export const getNextPositions = (cells:ICell[]) => {
    return cells.map(c => {
        return setNewPosition(c);
    });
}


const setNewPosition = (cell:ICell) => {
    const direction = getNextRandomPosition(cell);
    return positionBuilder[direction](cell);
}

const positionBuilder = {
    [directionTypes.down]: (cell:ICell) => {
        cell.top++;
        return cell;
    },
    [directionTypes.up]: (cell:ICell) => {
        cell.top--;
        return cell;
    },
    [directionTypes.left]: (cell:ICell) => {
        cell.left--;
        return cell;
    },
    [directionTypes.right]: (cell:ICell) => {
        cell.left++;
        return cell;
    },
}