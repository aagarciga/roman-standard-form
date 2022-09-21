"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roman = (value) => {
    if (value == 'I')
        return 1;
    if (value == 'V')
        return 5;
    if (value == 'X')
        return 10;
    if (value == 'L')
        return 50;
    if (value == 'C')
        return 100;
    if (value == 'D')
        return 500;
    if (value == 'M')
        return 1000;
    throw new Error(`${value} is not a correct roman numeral.`);
};
const toDecimal = (input) => {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        let s1 = roman(input.charAt(i));
        if (i + 1 < input.length) {
            let s2 = roman(input.charAt(i + 1));
            if (s1 >= s2) {
                result += s1;
            }
            else {
                result += s2 - s1;
                i++;
            }
        }
        else {
            result += s1;
        }
    }
    return result;
};
exports.default = toDecimal;
