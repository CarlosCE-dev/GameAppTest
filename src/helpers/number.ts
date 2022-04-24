import type { RomanTypes } from "@/types/RomanTypes";

/**
 * Converts a number to roman
 * @param number The number that will be converted
 * @returns Return a roman number
 */
export const convertToRoman = (number: number) => {
    const roman: RomanTypes = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let string = '';

    for (let i of Object.keys(roman)) {
        let value = Math.floor(number / roman[i]);
        number -= value * roman[i];
        string += i.repeat(value);
    }

    return string;
}