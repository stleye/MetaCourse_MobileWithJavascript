function addTwoNums(a, b) {
    try {
        if (typeof(a) != 'number') {
            throw ReferenceError("the first argument is not a number")
        } else if (typeof(b) != 'number') {
            throw ReferenceError("the second argument is not a number")
        }
        console.log(a + b)
    } catch (error) {
        console.log("Error!", error)
    }
}

addTwoNums(5, "5")
