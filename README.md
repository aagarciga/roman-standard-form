# roman-number [![Language Typescript](https://img.shields.io/badge/language-typescript-blue)](https://www.typescriptlang.org/) [![Code Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](#)

Helper functions for working with roman numerals.

## Roman numerals

Roman numerals are essentially a decimal number system, but instead of place value notation (in which place-keeping zeros enable a digit to represent different powers of ten) the system uses a set of symbols with fixed values, including "built in" powers of ten. Tally-like combinations of these fixed symbols correspond to the (placed) digits of Arabic numerals. This structure allows for significant flexibility in notation, and many variant forms are attested.

There has never been an official or universally accepted standard for Roman numerals. Usage in ancient Rome varied greatly and became thoroughly chaotic in medieval times. Even the post-renaissance restoration of a largely "classical" notation has failed to produce total consistency: variant forms are even defended by some modern writers as offering improved "flexibility". On the other hand, especially where a Roman numeral is considered a legally binding expression of a number, as in U.S. Copyright law (where an "incorrect" or ambiguous numeral may invalidate a copyright claim, or affect the termination date of the copyright period) it is desirable to strictly follow the usual style described below.

## Standard form

The following table displays how Roman numerals are usually written.

|     | Thousands | Hundreds | Tens | Units |
| --- | --------- | -------- | ---- | ----- |
| 1   | M         | C        | X    | I     |
| 2   | MM        | CC       | XX   | II    |
| 3   | MMM       | CCC      | XXX  | III   |
| 4   |           | CD       | XL   | IV    |
| 5   |           | D        | L    | V     |
| 6   |           | DC       | LX   | VI    |
| 7   |           | DCC      | LXX  | VII   |
| 8   |           | DCCC     | LXXX | VIII  |
| 9   |           | CM       | XC   | IX    |

The numerals for 4 (IV) and 9 (IX) are written using "subtractive notation", where the first symbol (I) is subtracted from the larger one (V, or X), thus avoiding the clumsier (IIII, and VIIII). Subtractive notation is also used for 40 (XL), 90 (XC), 400 (CD) and 900 (CM).These are the only subtractive forms in standard use.

## Usage/Examples

### romanNumeral.fromDecimal()

```javascript
import romanNumeral from '@aagarciga/roman-number';
...
const year = 2022;
const result = romanNumeral.fromDecimal(year);
console.log(result); // will print 'MMXXII'
...
```

### romanNumeral.toDecimal()

```javascript
import romanNumeral from '@aagarciga/roman-number';
...
const roman = "MMXXII";
const result = romanNumeral.toDecimal(roman);
console.log(result); // will print 2022
...
```

## Authors

- [@aagarciga](https://www.github.com/aagarciga) Alex Alvarez Gárciga
