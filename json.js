const jsonStr = '{"greeting": "hello"}'
const aPlainObj = JSON.parse(jsonStr)
aPlainObj.greeting = 'hi'

const data = {
    firstName: "John",
    lastName: "Doe",
    greeting: "Hello"
}

JSON.stringify(data)