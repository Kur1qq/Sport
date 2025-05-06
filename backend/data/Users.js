const bcrypt = require('bcryptjs');

const Users = [
    {
        username: "admin",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("admin", 10),
        isAdmin: true,
    },

    {
        username: "admin2",
        email: "admin2@gmail.com",
        password: bcrypt.hashSync("admin2", 10),
        isAdmin: true,
    }
]

module.exports = Users;