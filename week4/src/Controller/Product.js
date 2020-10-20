const Product = {}

const dumy = {
    status: 200,
    description: "OK",
    result: [
        {
            id: "1",
            name: " Akuyaku Reijou Reberu 99,",
            chapter: " Ch.325,",
            rating: " 9.0,",
            image: " https://komikcast.com/wp-content/uploads/2020/02/dsadsad2edafafc.jpg",
        },
        {
            id: "2",
            name: " The Legend of Mage",
            chapter: " Ch.25",
            rating: " 7.90",
            image: " https://komikcast.com/wp-content/uploads/2020/05/legeafasne.jpg",
        },
        {
            id: "3",
            name: " Slave B,",
            chapter: " Ch.38,",
            rating: " 8.00,",
            image: " https://komikcast.com/wp-content/uploads/2020/04/Slave-B-e1587506688440.png",
        },
        {
            id: "4",
            name: "RWBY",
            chapter: "Ch.11",
            rating: "7.67",
            image: "https://komikcast.com/wp-content/uploads/2017/07/177617-2.jpg",
        },
        {
            id: "5",
            name: "Kanojo, Okarishimasu",
            chapter: "Ch.153",
            rating: "8.20",
            image:
                "https://komikcast.com/wp-content/uploads/2020/07/2agg21fgaaasd51-e1596014400327.jpg",
        },
        {
            id: "6",
            name: "Magic Emperor",
            chapter: "Ch.120",
            rating: "8.00",
            image: "https://komikcast.com/wp-content/uploads/2019/10/magic-emperor.jpg",
        },
        {
            id: "7",
            name: "Kemono Giga",
            chapter: "Ch.11",
            rating: "7.20",
            image: "https://komikcast.com/wp-content/uploads/2020/08/kemogadfi-e1597578174675.jpg",
        },
        {
            id: "8",
            name: "Lasboss x Hero",
            chapter: "Ch.18",
            rating: "5.80",
            image: "https://komikcast.com/wp-content/uploads/2017/10/a2-1-190x300.jpg",
        },
        {
            id: "9",
            name: "The Developer System",
            chapter: "Ch.86",
            rating: "7.90",
            image: "https://komikcast.com/wp-content/uploads/2020/04/0l02-e1586910153901.jpg",
        },
        {
            id: "10",
            name: "Magic emperor",
            chapter: "50",
            rating: "9.6",
            image: "undefined",
        },
        {
            id: "11",
            name: "Magic emperorrr",
            chapter: "504",
            rating: "9.64",
            image: "undefined",
        },
        {
            id: "12",
            name: "Magic emperorrr",
            chapter: "504",
            rating: "9.64",
            image: "undefined",
        },
        {
            id: "13",
            name: "Magic emperorrrsss",
            chapter: "20",
            rating: "9.64",
            image: "public/uploads/2020-09-07T14:12:37.644Z1920x1080-simple-27334.jpg",
        },
        {
            id: "14",
            name: "Magic emperorrrsss",
            chapter: "20",
            rating: "9.64",
            image: "public/uploads/2020-09-07T14:27:11.883Z1920x1080-simple-27334.jpg",
        },
        {
            id: "15",
            name: "Magic emperorrrsss",
            chapter: "20",
            rating: "9.64",
            image: "public/uploads/2020-09-07T14:28:00.934Z1920x1080-simple-27334.jpg",
        },
        {
            id: "16",
            name: "Testdata",
            chapter: "20",
            rating: "9.64",
            image: "public/uploads/2020-09-07T14:33:52.838ZPUBG-server-location-map.jpg",
        },
        {
            id: "17",
            name: "Testdata",
            chapter: "20",
            rating: "9.64",
            image: "public/upload/2020-09-09T07:31:36.895Z-bogot.jpg",
        },
        {
            id: "18",
            name: "Testdata",
            chapter: "20",
            rating: "9.64",
            image: "public/upload/2020-09-09T07:33:11.487Z-IMG_20200728_151104.jpg",
        },
    ],
}

Product.all = async (req, res) => {
    try {
        return res.status(200).json(dumy)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = Product
