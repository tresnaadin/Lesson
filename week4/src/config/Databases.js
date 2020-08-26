const Pool = require('pg-pool')

const mydb = new Pool({
    user : "bukanebi",
    database : "TokoOnline",
    password : "bukalapak",
    host : "localhost"
})

module.exports = mydb