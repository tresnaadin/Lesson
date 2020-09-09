const bcr = require('bcrypt')


async function hashPassword (pasword) {
    try {
        const salt = await bcr.genSalt(10)
        console.log("Salt : ", salt)
        const result = await bcr.hash(pasword, salt)
        console.log("HashPassword : ", result)
        return result

    } catch (error) {
        throw error
    }
}

module.exports = hashPassword