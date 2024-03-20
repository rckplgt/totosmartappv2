import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('12345', 10),
        admin: true
    },
    {
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: bcrypt.hashSync('12345', 10),
        admin: false
    },
    {
        name: 'Jane Dee',
        email: 'janedee@email.com',
        password: bcrypt.hashSync('12345', 10),
        admin: false
    }
]

export default users