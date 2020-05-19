let existingPasswword = "Password12@"

const passwordIsValid = password => {
    const existRegex = /Password12@|pass|PASSWORD/
    const stringLength = password.length
    const lowercaseRegex = /[a-z]+/
    const uppercaseRegex = /[a-z]+/
    const numberRegex = /[0-9]+/
    const specialCaseRegex = /[^0-9a-zA-Z]+/

    if (!existRegex.test(password)) throw "password should exist"

    if (stringLength < 8) throw "password should be longer than than 8 characters"

    if (!lowercaseRegex.test(password)) throw "password should have at least one lowercase letter"

    if (!uppercaseRegex.test(password)) throw "password should have at least one uppercase letter"

    if (!numberRegex.test(password)) throw "password should have at least one number"

    if (!specialCaseRegex.test(password)) throw "password should have at least one special character"
}

const passwordIsOk = password => {
    let counter = 0
    const existRegex = /Password12@|pass|PASSWORD/
    const stringLength = password.length
    const lowercaseRegex = /[a-z]+/
    const uppercaseRegex = /[a-z]+/
    const numberRegex = /[0-9]+/
    const specialCaseRegex = /[^0-9a-zA-Z]+/

    if (!existRegex.test(password)) {
        return false
    } else {
        counter++
    }

    if (stringLength < 8) {
        return false
    } else {
        counter++
    }

    if (lowercaseRegex.test(password)) counter++
    if (uppercaseRegex.test(password)) counter++
    if (numberRegex.test(password)) counter++
    if (specialCaseRegex.test(password)) counter++

    let result = (counter < 3) ? false : true
    return result
}

passwordIsValid(existingPasswword)
console.log(passwordIsOk(existingPasswword))

module.export = {passwordIsValid,passwordIsOk}