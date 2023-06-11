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