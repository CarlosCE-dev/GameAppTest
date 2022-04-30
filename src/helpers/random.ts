import { Globals } from '@/global/globals';

/**
 * Get a new random position on the grid
 * @returns Returns a new random position
 */
export const randomPositions = () => {
    return [
        Math.floor(Math.random() * (Globals.totalWidth - 0 + 1)) + 0,
        Math.floor(Math.random() * (Globals.totalHeight - 0 + 1)) + 0
    ];
}
/**
 * Generates a random color
 * @returns Returns a new color in hex format
 */
export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
/**
 * Generate unique id
 * @returns Returns the new unique id
 */
export const generateUniqueId = () => {
  return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
};