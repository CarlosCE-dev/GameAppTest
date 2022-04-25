/**
 * Gets the correct contrast color of a color
 * @param hexColor The hex color provided
 * @returns Returns black or white based on the color
 */
export const getCorrectColor = (hexColor:string) => {
    return setContrast(hexToRgb(hexColor) || {
        r: 0,
        g: 0,
        b: 0
    });
};
/**
 * Basic interface for a rgb color
 */
interface RgbColor {
    r: number,
    g: number,
    b: number
}
/**
 * Convert a hex color to RGB
 * @param hexColor The color in hex format
 * @returns The color converted in to rgb
 */
const hexToRgb = (hexColor:string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
          }
        : null
}
// Calc to work out if a color will match on black or white better
const setContrast = (rgb:RgbColor) =>
    (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? 'black' : 'white';
