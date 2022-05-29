import { FontAwesome, Ionicons, AntDesign  } from '@expo/vector-icons'; 

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
        title: "Nora Salon",
        isBookmarked: false,
        rating: 4.5,
        address: "Jl. Raya Cikarang Barat No.1, Cikarang Barat, Kota Bandung, Jawa Barat 40282",
        description: "Merupakan salah asatu salon terbaik di Surabaya dimana disalon ini kita bisa melakukan beragam perawatan. dI Shinjuku Hair Make ini kita bisa melakukan perawatan hair coloring, hair cut dan lainnya. Selain itu, pemilik salon ini juga pernah menggelar hair show bersama produk Matrix Professional.",
        schedule: "08.00 - 20.00",
        facilities: ["Wifi", "Parkir", "Kasur", "Meja", "Hair Coloring", "Hair Cutting", "Hair Styling"],
        reviews: [
            {
                name: "Safir Rahmahuda",
                image: require('../../assets/images/avatar.png'),
                rating: 4.5,
                date: 'Apr 20, 2022',
                review: 'Thank you Shinjuku!'
            },
            {
                name: "Anatasia Griselda",
                image: require('../../assets/images/avatar.png'),
                rating: 5,
                date: 'Apr 20, 2022',
                review: 'Tampilan filter aplikasi dan hasilnya pun sama, tidak mengecewakan 🤙🤙'
            },
            {
                name: "Utara Setya",
                image: require('../../assets/images/avatar.png'),
                rating: 4.5,
                date: 'Apr 20, 2022',
                review: 'Layanan sangat bagus'
            },
            {
                name: "Bagus Sedya",
                image: require('../../assets/images/avatar.png'),
                rating: 5,
                date: 'Apr 20, 2022',
                review: 'Bagus sekali hasilnya'
            },
            {
                name: "Tika Ayu",
                image: require('../../assets/images/avatar.png'),
                rating: 4.5,
                date: 'Apr 20, 2022',
                review: 'Pegawai sangat ramah dan hasil memuaskan. Thank you Shinjuku!'
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
                icon: <FontAwesome name="user" size={24} color="black" />,
                subtitle: 'Edit Profile',
                link: '',
                line: true,
            },
            {
                icon: <FontAwesome name="credit-card-alt" size={20} color="black" />,
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
                icon: <FontAwesome name="lock" size={24} color="black" />,
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
                icon: <Ionicons name="settings-sharp" size={22} color="black" />,
                subtitle: 'Setting',
                link: '',
                line: true,
            },
            {
                icon: <FontAwesome name="question" size={24} color="black" />,
                subtitle: 'About Hair-IT',
                link: '',
                line: true,
            },
            {
                icon: <AntDesign name="customerservice" size={22} color="black" />,
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
        title: "Nora Salon",
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