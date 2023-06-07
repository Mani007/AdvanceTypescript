"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The regular way with type "any"
function addTwo(num) {
    return num + 2;
}
addTwo("5");
AddTwo(5);
// Defining the type of return type from the function
function addTwobad(num) {
    return num + 2;
}
// Typescript way of declaring function
function AddTwo(num) {
    return num + 2;
}
// Function with multiple parameter
function Loginpage(name, pass, isAdmin) {
    return name + pass;
}
Loginpage("t", "a", true);
// Function with multiple parameter and default parameter
function Landingpage(name, pass, isAdmin) {
    if (isAdmin === void 0) { isAdmin = false; }
    return name + pass;
}
Landingpage("a", "b");
Landingpage("a", "b", true);
// Function with arrow format
var getVal = function (s) {
    return "value";
};
// Function returing void
function errormsg(ermsg) {
    console.log(ermsg);
    // return 1    This is not possible as function is retuning void
}
// Handle error 
function errorHandle(ermsg) {
    throw new Error(ermsg);
}
