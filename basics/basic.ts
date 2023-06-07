let greeting:string = "hello";
console.log(greeting)

//number
let userId: number = 3344

//boolean
let admin: boolean = true

//any type in typescript - you must avoid this type at all the cost as musch as possible as typechecking is completely stop here. 
let hero;  //this hero variable is automatically assigned as "any" type
function getHero(){
    return "thor"
}

hero = getHero()
export {}