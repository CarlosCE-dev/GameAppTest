/**
 * Receives a array and shuffle all the collection
 * @param array A collection provided
 */
export const shuffleArray = (array: any) => {
    let last = array.length;
    let number: number;
    while (last > 0) {
        number = randomNumber(last);
        swap(array, number, --last);
    }
}
/**
 * Groups a list with a certain condition
 * @param list The collect of items
 * @param getKey The function filter
 * @returns Returns the list in a group object
 */
export const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);
/**
 * Returns a random number
 * @param number Number provided
 * @returns Return random number
 */
const randomNumber = (number: number) => Math.floor(Math.random() * number);
/**
 * Swap elements in a array provided
 * @param array Any array
 * @param number Random number
 * @param last Last number
 * @returns returns a element from array
 */
const swap = (array: any, number: number, last: number) => {
    let element = array[number];
    array[number] = array[last];
    array[last] = element;
    return element;
}

