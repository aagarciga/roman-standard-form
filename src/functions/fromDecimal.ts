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

function keys<T extends object>(obj: T) {
    return Object.keys(obj) as Array<keyof T>;
}

const fromDecimal = (num: number): string => {

    let result = "";
    if (num > 0 && num < 4000) {

        for (const key of keys(roman)) {
            const counter = Math.floor(num / roman[key]);
            if (counter !== 0) {
                result += key.repeat(counter);
            }
            num %= roman[key];
            if (num === 0) return result;
        }
    }
    return result;
};

export default fromDecimal;