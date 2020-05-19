let {passwordIsValid} = require("../src/password_checker.js")

describe("check if the password meets a few different conditions",()=>{
    const existRegex = /Password12@|pass|PASSWORD/
    const lowercaseRegex = /[a-z]+/
    const uppercaseRegex = /[a-z]+/
    const numberRegex = /[0-9]+/
    const specialCaseRegex = /[^0-9a-zA-Z]+/

    it("password should exist",()=>{
        expect(existRegex.test("Password12@")).toBe(true)
    })

    it("password should be longer than than 8 characters",()=>{
        expect(passwordIsValid("Password12@")).toBe(null)
    })

    it("password should have at least one lowercase letter",()=>{
        expect(lowercaseRegex.test("Password12@")).toBe(true)
    })

    it("password should have at least one uppercase letter",()=>{
        expect(uppercaseRegex.test("Password12@")).toBe(true)
    })

    it("password should have at least one number",()=>{
        expect(numberRegex.test("Password12@")).toBe(true)
    })

    it("password should have at least one special character",()=>{
        expect(specialCaseRegex.test("Password12@")).toBe(true)
    })

})