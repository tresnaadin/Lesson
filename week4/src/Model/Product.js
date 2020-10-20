const database = require("../config/Databases")
const Product = {}

Product.GetAll = () => {
    return new Promise((resolve, reject) => {
        database
            .query("SELECT * FROM product ORDER BY id ASC ")
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

Product.Add = (name, stok, price) => {
    database
        .query(`INSERT INTO product (name, stok, price) VALUES ('${name}', ${stok}, '${price}')`)
        .then((res) => {
            return "Data berhasil ditambahkan"
        })
        .catch((err) => {
            return err
        })
}

Product.Edit = (id, name, stok, price) => {
    database
        .query(
            `UPDATE product SET name='${name}', stok=${stok}, price='${price}' WHERE id=${id};`)
        .then((res) => {
            console.log(res)
            return "Data berhasil di update"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

module.exports = Product
