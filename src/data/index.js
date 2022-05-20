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
    },
    {
        image: require('../../assets/images/gambar_salon.png'),
        title: "Selatan Salon",
        isBookmarked: true,
        rating: 5.0,
        address: "Jl. H. Syukur No.24, Pabean, Waru, Surabaya Jawa Timur",
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