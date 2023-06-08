const user: (number|string) [] = [] // normal array order is not important

let tuser: [number,string,boolean] // order is important here

tuser = [1,'a', true]
// tuple in type
type user = [number,string]
const newuser: user = [1,'a'] 
// mainupulation in tuple 
newuser[0] = 10

// weird - dont do this
//newuser.push(true)
export{}