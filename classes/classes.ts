class User {
    public email: string
    protected _count: number = 1   // making it inheritale
    name: string
    private city: string = 'lisbon'   // private hence need getter and setter
    readonly #dob?: number             // # is used to mae private
    constructor(email: string, name: string) {
            this.email = email
            this.name = name
    }

    // Getter
    get getcity(): string{
        return this.city
    }

    get getCount(): number {
        return this._count
    }

    // setter  it does not have return type
    set setcount(num: number){
        this._count = num
    }


}

const jj = new User('a@a.com', 'jj')
// jj.city = 'abc'
// Inheritance in TS, but private variale cannot be used
class Subuser extends User {
    isFamily: boolean = true
    changecount(num: number){
        this._count = num   
    }
}
