const Pool = require("pg-pool")

const mydb = new Pool({
    user: "bukanebi",
    database: "MangaApp",
    password: "bukalapak",
    host: "localhost",
})

module.exports = mydb
