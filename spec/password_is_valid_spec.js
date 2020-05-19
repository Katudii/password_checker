let {passwordIsValid} = require("../src/password_checker.js")

describe("check if the password meets a few different conditions",()=>{

    it("password should exist",()=>{
        expect(()=>{passwordIsValid(" ")}).toThrow(new Error("password should exist"))
    })

    it("password should be longer than than 8 characters",()=>{
        expect(()=>{passwordIsValid("webdev")}).toThrow(new Error("password should be longer than than 8 characters"))
    })

    it("password should have at least one lowercase letter",()=>{
        expect(()=>{passwordIsValid("PASSWORD12@")}).toThrow(new Error("password should have at least one lowecase letter"))
    })

    it("password should have at least one uppercase letter",()=>{
        expect(()=>{passwordIsValid("password12@")}).toThrow(new Error("password should have at least one uppercase letter"))
    })

    it("password should have at least one number",()=>{
        expect(()=>{passwordIsValid("Password@")}).toThrow(new Error("password should have at least one number"))
    })

    it("password should have at least one special character",()=>{
        expect(()=>{passwordIsValid("Password12")}).toThrow(new Error("password should have at least one special character"))
    })

})