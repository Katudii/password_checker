let { passwordIsOk } = require("../src/password_checker")

describe("checks if password meets atleast three conditions", () => {
    it("when password only meets one condition", () => {
        expect(passwordIsOk("PASSWOR")).toBe(false)
    })

    it("when password only meets two conditions", () => {
        expect(passwordIsOk("Password")).toBe(false)
    })

    it("when password only meets three conditions", () => {
        expect(passwordIsOk("Password12")).toBe(true)
    })

    it("when password meets more three conditions", () => {
        expect(passwordIsOk("Password12@")).toBe(true)
    })

    it("when password does not meet the first two conditions", () => {
        expect(passwordIsOk("wrong")).toBe(false)
    })
})