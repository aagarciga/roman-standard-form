"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roman = {
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
function keys(obj) {
    return Object.keys(obj);
}
const fromDecimal = (num) => {
    let result = "";
    if (num > 0 && num < 4000) {
        for (const key of keys(roman)) {
            const counter = Math.floor(num / roman[key]);
            if (counter !== 0) {
                result += key.repeat(counter);
            }
            num %= roman[key];
            if (num === 0)
                return result;
        }
    }
    return result;
};
exports.default = fromDecimal;
