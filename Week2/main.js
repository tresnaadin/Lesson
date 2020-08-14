
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = days.find((item) => {
                return item === day
            })

            if (cek) {
                resolve(`${day} merupakan hari kerja`)
            } else {
                reject(`${day} bukan hari kerja`)
            }

        }, 2000)
    })
}

// then catch
// cekHariKerja("sabtu")
// .then(resul => {
//     console.log(resul)
// })
// .catch(err => {
//     console.log(err)
// })


const getMonth = (callback) => {
    let error = false
    const month = ["janurai", "februari", "maret"]
    if (!error) {
        callback("string")
    } else {
        callback(new Error("Ada kesalahan"))
    }

}


getMonth((bulan) => {
    if(Array.isArray(bulan)) {
        bulan.map((namaBulan) => {
            console.log(namaBulan)
        })
    } else {
        console.log(bulan)
    }
})