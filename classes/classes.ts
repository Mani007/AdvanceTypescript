class User {
    email: string
    name: string
    city: string = ''
    readonly dob?: number
    constructor(email: string, name: string) {
            this.email = email
            this.name = name
    }
}

const jj = new User('a@a.com', 'jj')
jj.city = 'abc'