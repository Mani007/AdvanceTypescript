"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The regular way with type "any"
function addTwo(num) {
    return num + 2;
}
addTwo("5");
AddTwo(5);
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
