const model = require("../model/manga")
const result = require("../helpers/respon")
const Manga = {}

Manga.all = async (req, res) => {
    try {
        const data = await model.GetAll()
        return result(res, 200, data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

Manga.add = async (req, res) => {
    try {
        if (req.file === undefined) {
            console.log(req.file)
            return res.status(500).json("Data Kosong")
        }
        const datas = {
            name: req.body.name,
            chapter: req.body.chapter,
            rating: req.body.rating,
            image: req.file.path,
        }
        const data = await model.Add(datas)
        return result(res, 201, datas)
    } catch (error) {
        return res.status(500).json(error)
    }
}

Manga.edit = async (req, res) => {
    try {
        const { id, name, chapter, rating, image } = req.body
        console.log(req.body)
        const data = await model.edit(id, name, chapter, rating, image)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = Manga
