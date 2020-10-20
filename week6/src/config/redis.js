const redis = require("redis")

class Redis {
    constructor() {
        this.redisdb = redis.createClient({
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            password: process.env.REDIS_PASSWORD,
        })
    }

    redisChek() {
        return new Promise((resolve, reject) => {
            this.redisdb.get("testkey", (err, res) => {
                if (err) {
                    reject(err)
                }
                if (res === "OK" || res === null) {
                    resolve("Connection to Redis successfully.")
                }
            })
        })
    }
}

module.exports = new Redis()
