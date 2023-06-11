//making code reusable
const score: Array<number> = []
const myname: Array<string> = []
// Bad code below
// function identity(arg: any): any {
//     return arg;
//   }

function identity <T> ( val: T): T {  // letter T is just a local variale
    return val
}
// usage
interface Bottle{
    brand: string,
    price: number
}

identity<Bottle>({
    brand: 'anc', price: 0
})


function getSearch<T>( prod: T[]):  T {
    return prod[3]
}

// In arrow function
const getmoresearch = <T,>(prod: T[]): T =>{    // the , comma is also OK in this line 'T,'
    return prod[3]
}

interface DB {
    conn: string,
    pass: string
}
// Multiple generics
function another<T, U extends DB> ( val1: T, val2: U): object {
    return{
        val1, val2
    }
}

another( 3, {
    conn: 'conn',
    pass: 'pass'
})