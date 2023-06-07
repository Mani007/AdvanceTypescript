// The regular way with type "any"
function addTwo(num){
    return num+2
}

addTwo("5") 
AddTwo(5)

// Defining the type of return type from the function
function addTwobad(num: number): number{
    return num+2
}
// Typescript way of declaring function
function AddTwo(num: number){
    return num+2
}

// Function with multiple parameter
function Loginpage(name: string, pass: string, isAdmin: boolean){
    return name+pass
}

Loginpage("t","a", true)

// Function with multiple parameter and default parameter
function Landingpage(name: string, pass: string, isAdmin: boolean = false){
    return name+pass
}

Landingpage("a", "b")
Landingpage("a", "b", true)

// Function with arrow format
const getVal = (s: string): string {
    return "value"
}

// Function returing void
function errormsg(ermsg: string): void{
    console.log(ermsg)
    // return 1    This is not possible as function is retuning void
}

// Handle error 
function errorHandle(ermsg: string): never{
    throw new Error(ermsg)
}
export {}