// object in JS
const user = {
    name: "abc",
    isPaid: true
}

// In real life use case for object is used to pass inside the function and return out of the function. 
function createUser({name: string, isPaid: boolean}){

}

createUser({name: 'abc', isPaid: true})

// Returning the object from the functions with no input

function checkUser():{name: string, isPaid: boolean}{
    return {name: 'abc', isPaid: true}
}