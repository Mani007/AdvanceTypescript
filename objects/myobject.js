// object in JS
var user = {
    name: "abc",
    isPaid: true
};
// In real life use case for object is used to pass inside the function and return out of the function. 
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'abc', isPaid: true });
// Returning the object from the functions with no input
function checkUser() {
    return { name: 'abc', isPaid: true };
}
// weirdness of javascript in typescript
var newUser = { name: 'abc', isPaid: true, email: 'a@a.a' }; // we are passing extra parameter in object
createUser(newUser); // no typechecking error is een shown
