
// pembuatan function deklarsi
function sayHello () {
    console.log("hallow")
}

// pemanggilan function
// sayHello()

// function parameter
function sayMyName (name, region) {
    
    if (region == "indo") {
        console.log("hallo " + name)
    } 
    else if (region == "eng") {
        console.log("hello " + name)
    }
}

// sayMyName("ebi", "eng")

// function with return

function perkalian (angka1, angka2) {
    return angka1 * angka2
}

function checkPassword (password) {
    const secret = "abcd1234"

    if (secret != password) {
        console.log("Password salah")
        return

    } else {
        console.log("Password benar")
    }

    console.log("Anda Berhasil login")
}

checkPassword("1234abcd")


// function rest param
function penjumlahan (...numbers) {

    for (const angka of numbers) {
        console.log(angka)
    }
}

penjumlahan("coba", 20, 30)


// function expression

const hallo = function () {
    console.log("hellow wolrd")
}


// function ES6

const yourLocation = (location) => {
    console.log("youre in " + location)
}

yourLocation("depok")

// method

const myData = {
    name : "ebi",
    lokasi : () => {
        console.log("Depok")
    },
}

myData.lokasi()

// built-in method

const arr = ["apel", "jagung"]
let str = "bukanebi"
let myInt = 20

myInt.toString()
arr.push("mangga")

console.log(arr)


// calback

function function2 (value) {
    console.log(value)
}


