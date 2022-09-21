import romanNumeral from "../src"

describe("roman.toDecimal", () => {

    test("0", () => {
        let result: any = romanNumeral.toDecimal("")
        expect(result).toBe(0)
    })
    test("1", () => {
        let result: any = romanNumeral.toDecimal("I")
        expect(result).toBe(1)
    })

    test("2", () => {
        let result: any = romanNumeral.toDecimal("II")
        expect(result).toBe(2)
    })

    test("3", () => {
        let result: any = romanNumeral.toDecimal("III")
        expect(result).toBe(3)
    })

    test("4", () => {
        let result: any = romanNumeral.toDecimal("IV")
        expect(result).toBe(4)
    })

    test("5", () => {
        let result: any = romanNumeral.toDecimal("V")
        expect(result).toBe(5)
    })

    test("9", () => {
        let result: any = romanNumeral.toDecimal("IX")
        expect(result).toBe(9)
    })

    test("3999", () => {
        let result: any = romanNumeral.toDecimal("MMMCMXCIX")
        expect(result).toBe(3999)
    })

    test("490", () => {
        let result: any = romanNumeral.toDecimal("CDXC")
        expect(result).toBe(490)
    })

    test("990", () => {
        let result: any = romanNumeral.toDecimal("CMXC")
        expect(result).toBe(990)
    })

    test("2022", () => {
        let result: any = romanNumeral.toDecimal("MMXXII")
        expect(result).toBe(2022)
    })

    test("150", () => {
        let result: any = romanNumeral.toDecimal("LLL")
        expect(result).toBe(150)
    })

    test("Wrong Roman Numeral", () => {

        const callFunction: any = () => {
            romanNumeral.toDecimal("HMXXII")
        }

        expect(callFunction).toThrow("H is not a correct roman numeral.")
    })
})