class User {
    public email: string
    name: string
    private city: string = 'lisbon'   // private hence need getter and setter
    readonly #dob?: number             // # is used to mae private
    constructor(email: string, name: string) {
            this.email = email
            this.name = name
    }
}

const jj = new User('a@a.com', 'jj')
// jj.city = 'abc'
