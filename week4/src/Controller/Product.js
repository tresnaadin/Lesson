const model = require("../Model/Product")
const Product = {}

Product.all = async (req, res) => {
    try {
        const data = await model.GetAll()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

Product.add = (req, res) => {
    const { name, stok, price } = req.body
    const data = model.Add(name, stok, price)
    return res.send(data)
}

Product.edit = (req, res) => {
    const { id, name, stok, price } = req.body
    const data = model.Edit(id, name, stok, price)
    return res.send(data)
}

Product.search = (req, res) => {
    const name = req.query.name
    return res.send(`your data here ${name}`)
}

Product.test = async (req, res) => {
    try {
        const { name, stock, price } = req.params
        const data = model.Add(name, stock, price)
        return res.send("data berhasil ditambahkan")
    } catch (error) {
        res.send(error)
    }
}

module.exports = Product
