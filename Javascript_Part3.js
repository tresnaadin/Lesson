const user = {
    username: "bukanebi",
    email: "bukanebi@email.com",
    password: "abcd1234",
}

// syncrounouse example

function exmaple1() {
    console.log("angka 1")
    console.log("angka 2")
    console.log("angka 3")
    console.log("angka 4")
}

// Asyncrounouse example

function example2() {
    console.log("angka 1")
    console.log("angka 2")
    setTimeout(() => {
        console.log("angka 3")
    }, 1000)
    console.log("angka 4")
}

// error in Asyncrounouse

const getPassword = (cb) => {
    setTimeout(() => {
        return cb(user.password)
    }, 3000)
}

const getEmail = (cb) => {
    setTimeout(() => {
        return cb(user.email)
    }, 2000)
}

const getUsername = (cb) => {
    setTimeout(() => {
        return cb(user.username)
    }, 2000)
}

const userLogin = (password) => {
    if (password == passFromDB) {
        console.log("Anda berhasil lgin")
    } else {
        console.log("Login gagal")
    }
}

// handle wiht callback

const userLogin2 = (password) => {
    getPassword((pass) => {
        if (pass == password) {
            console.log("Berhasil Login")

        } else {
            console.log("Login gagal")
        }
    })
}

// handle wiith Promise

const getPromiseUser = () => {
    return new Promise((resolve, reject) => {
        let err = false // change to true for error testing
        if (err) {
            reject("terjadi kesalahan")
        } else {
            setTimeout(() => {
                resolve(user)
            }, 2000)
        }
    })
}

getPromiseUser()
    .then((res) => {
        console.log("dari then")
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

// handle asyncronouse with asnc/await
const exampleAsync = async () => {
    const dataUser = await getPromiseUser()
    console.log(dataUser.email)
}

exampleAsync()


// trycatch
const exampleTryCatch = async () => {
    try {
        const dataUser = await getPromiseUser()
        console.log(dataUser.email)
    } catch (err) {
        console.log(err)
    }
}

exampleTryCatch()
