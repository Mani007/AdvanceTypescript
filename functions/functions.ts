// The regular way with type "any"
function addTwo(num){
    return num+2
}

addTwo("5") 
AddTwo(5)
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



export {}