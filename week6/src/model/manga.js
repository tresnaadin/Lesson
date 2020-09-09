const database = require("../config/db")
const Manga = {}

Manga.GetAll = () => {
    return new Promise((resolve, reject) => {
        database
            .query("SELECT * FROM manga ORDER BY id ASC ")
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

Manga.Add = (data) => {
    return new Promise((resolve, reject) => {
        const q = `INSERT INTO public.manga(
            name, chapter, rating, image)
            VALUES ('${data.name}', '${data.chapter}', '${data.rating}', '${data.image}')`
        database
            .query(q)
            .then((res) => {
                resolve("Data berhasil ditambahkan")
            })
            .catch((err) => {
                reject(err)
            })
    })
}

Manga.edit = (id, name, chapter, rating, image) => {
    return new Promise((resolve, reject) => {
        const q = `UPDATE public.manga SET name='${name}', chapter='${chapter}', rating='${rating}', image='${image}' WHERE id=${id};`
        database
            .query(q)
            .then((res) => {
                resolve("Data berhasil diubah")
            })
            .catch((err) => {
                reject(err)
            })
    })
}

module.exports = Manga
