// smilar to types but complete different in application
interface User {
    readonly dbid: number
    email: string,
    userId: number
    gId?: string,
    //starttrail: () => string     // this is function returning string
    starttrail(): string,            // same as above
    getCupon(cuponname: string): number
}

const user1: User = {
    dbid: 2,
    email: 'a@a.a',
    userId: 11,
    starttrail: () => {
        return 'abc'
    },
    getCupon: (cname: 'a') => {    // the name of local variable is not needed
        return 1
    }

}