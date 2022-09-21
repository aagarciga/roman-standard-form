import romanNumeral from "../src"

describe("roman.fromDecimal", () => {

    test("0", () => {
        let result: any = romanNumeral.fromDecimal(0)
        expect(result).toBe("")
    })
    test("1", () => {
        let result: any = romanNumeral.fromDecimal(1)
        expect(result).toBe("I")
    })

    test("2", () => {
        let result: any = romanNumeral.fromDecimal(2)
        expect(result).toBe("II")
    })

    test("3", () => {
        let result: any = romanNumeral.fromDecimal(3)
        expect(result).toBe("III")
    })

    test("4", () => {
        let result: any = romanNumeral.fromDecimal(4)
        expect(result).toBe("IV")
    })

    test("5", () => {
        let result: any = romanNumeral.fromDecimal(5)
        expect(result).toBe("V")
    })

    test("9", () => {
        let result: any = romanNumeral.fromDecimal(9)
        expect(result).toBe("IX")
    })

    test("3999", () => {
        let result: any = romanNumeral.fromDecimal(3999)
        expect(result).toBe("MMMCMXCIX")
    })

    test("490", () => {
        let result: any = romanNumeral.fromDecimal(490)
        expect(result).toBe("CDXC")
    })

    test("990", () => {
        let result: any = romanNumeral.fromDecimal(990)
        expect(result).toBe("CMXC")
    })

    test("2022", () => {
        let result: any = romanNumeral.fromDecimal(2022)
        expect(result).toBe("MMXXII")
    })
})