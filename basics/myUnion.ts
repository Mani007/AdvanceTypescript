const score: number|string = 10 // unition strict type 

type Admin = {
    username: string,
    id: number
}

type User = {
    name: string,
    id: number
}

// Uniion type
let jakob: Admin|User = {
    name: "jj",
    id: 23
}

jakob = { username: "abc", id: 10}

// typeof to check the object type, its called union narrowing 
function getDBid(id: number|string){
    if (typeof id === 'string'){
        id.toLowerCase()
    }
}

// array union
const uarray: string[]|number[]| boolean[] = []