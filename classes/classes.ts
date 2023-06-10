class User {
    public email: string
    private _count: number = 1
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

    // setter
    set setcount(num: number){
        this._count = num
    }

}

const jj = new User('a@a.com', 'jj')
// jj.city = 'abc'
