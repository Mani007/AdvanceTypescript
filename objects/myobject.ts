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

// weirdness of javascript in typescript
let newUser = {name: 'abc', isPaid: true, email: 'a@a.a'}  // we are passing extra parameter in object
createUser(newUser)   // no typechecking error is een shown
// Type Alias
type User = {
    name: string,
    isPaid: boolean
}
// Function accepting user type and returning user type
function UserCreate(user: User): User{
    return {name: 'abc', isPaid: true}
}

UserCreate({name: 'abc', isPaid: true})

// Readonly type 
type NewUser = {
    readonly _id: string,
    name: string,
    isPaid: boolean
}

let myUser = {_id: "123",name: 'abc', isPaid: true}
myUser.name = "jj"
//myUser._id = 10  this is not possile as its readonly