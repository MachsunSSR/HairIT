export const bannerData = [
    {
        title: 'First Banner',
        image: require('../../assets/images/banner1.png'),
    },
    {
        title: 'Second Banner',
        image: require('../../assets/images/banner2.png'),
    },
    {
        title: 'Third Banner',
        image: require('../../assets/images/banner3.png'),
    },
]

export const homeCategory = [
    {
        title: 'Haircut',
        image: require('../../assets/images/haircut.png'),
    },
    {
        title: 'Hairstyling',
        image: require('../../assets/images/hairstyling.png'),
    },
    {
        title: 'Haircare',
        image: require('../../assets/images/haircare.png'),
    },
    {
        title: 'More',
        image: require('../../assets/images/more.png'),
    },
]

export const recommendationData = [
    {
        image: require('../../assets/images/gambar_salon.png'),
        title: "Norak Salon",
        isBookmarked: false,
        rating: 4.5,
        address: "Jl. Raya Cikarang Barat No.1, Cikarang Barat, Kota Bandung, Jawa Barat 40282",
        description: "Merupakan salah asatu salon terbaik di Surabaya dimana disalon ini kita bisa melakukan beragam perawatan. dI Shinjuku Hair Make ini kita bisa melakukan perawatan hair coloring, hair cut dan lainnya. Selain itu, pemilik salon ini juga pernah menggelar hair show bersama produk Matrix Professional.",
        schedule: "08.00 - 20.00",
        facilities: ["Wifi", "Parkir", "Kasur", "Meja", "Hair Coloring", "Hair Cutting", "Hair Styling"],
        reviews: [
            {
                name: "Selatan Selingkuh Waduh",
                image: require('../../assets/images/avatar.png'),
                rating: 4.5,
                date: 'Apr 20, 2022',
                review: 'Layanan sangat bagus, pegawai sangat ramah dan hasil memuaskan. Thank you Shinjuku!'
            },
            {
                name: "Ruby Tersesat Dosa",
                image: require('../../assets/images/avatar.png'),
                rating: 5,
                date: 'Apr 20, 2022',
                review: 'Bagus sekali hasilnya, saya request model dari tampilan filter aplikasi dan hasilnya pun sama, tidak mengecewakan 🤙🤙'
            },
            {
                name: "Selatan Selingkuh Waduh",
                image: require('../../assets/images/avatar.png'),
                rating: 4.5,
                date: 'Apr 20, 2022',
                review: 'Layanan sangat bagus, pegawai sangat ramah dan hasil memuaskan. Thank you Shinjuku!'
            },
            {
                name: "Ruby Tersesat Dosa",
                image: require('../../assets/images/avatar.png'),
                rating: 5,
                date: 'Apr 20, 2022',
                review: 'Bagus sekali hasilnya, saya request model dari tampilan filter aplikasi dan hasilnya pun sama, tidak mengecewakan 🤙🤙'
            },
            {
                name: "Selatan Selingkuh Waduh",
                image: require('../../assets/images/avatar.png'),
                rating: 4.5,
                date: 'Apr 20, 2022',
                review: 'Layanan sangat bagus, pegawai sangat ramah dan hasil memuaskan. Thank you Shinjuku!'
            },
            {
                name: "Ruby Tersesat Dosa",
                image: require('../../assets/images/avatar.png'),
                rating: 5,
                date: 'Apr 20, 2022',
                review: 'Bagus sekali hasilnya, saya request model dari tampilan filter aplikasi dan hasilnya pun sama, tidak mengecewakan 🤙🤙'
            },
        ]
    },
    {
        image: require('../../assets/images/gambar_salon.png'),
        title: "Selatan Salon",
        isBookmarked: true,
        rating: 5.0,
        address: "Jl. H. Syukur No.24, Pabean, Waru, Surabaya Jawa Timur",
        description: "Ini adalah tempat cukur andalan parahhh",
        schedule: "08.00 - 20.00",
        facilities: ["Wifi", "Parkir", "Kasur", "Meja"],
    }
]

export const profileLinks = [
    {
        title: 'Account',
        links: [
            {
                icon: require('../../assets/images/haircut.png'),
                subtitle: 'Edit Profile',
                link: '',
                line: true,
            },
            {
                icon: require('../../assets/images/haircut.png'),
                subtitle: 'Bank Information',
                link: '',
                line: false,
            }
        ],
    },
    {
        title: 'Security',
        links: [
            {
                icon: require('../../assets/images/haircut.png'),
                subtitle: 'Change Password',
                link: '',
                line: false,
            },
        ],
    },
    {
        title: 'Others',
        links: [
            {
                icon: require('../../assets/images/haircut.png'),
                subtitle: 'Setting',
                link: '',
                line: true,
            },
            {
                icon: require('../../assets/images/haircut.png'),
                subtitle: 'About Hair-IT',
                link: '',
                line: true,
            },
            {
                icon: require('../../assets/images/haircut.png'),
                subtitle: 'Help Center',
                link: '',
                line: false,
            },
        ]
    }
]

export const historyData = [
    {
        image: require('../../assets/images/gambar_salon.png'),
        title: "Norak Salon",
        address: "Jl. Raya Cikarang Barat No.1, Cikarang Barat, Kota Bandung, Jawa Barat 40282",
        schedule: 'Sun 15.00 PM - 17.00 PM'
    },
    {
        image: require('../../assets/images/gambar_salon.png'),
        title: "Selatan Salon",
        address: "Jl. H. Syukur No.24, Pabean, Waru, Surabaya Jawa Timur",
        schedule: 'Mon 15.00 PM - 17.00 PM'
    }
]