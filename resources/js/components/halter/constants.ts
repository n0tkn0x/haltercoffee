import { MenuItem, GalleryPhoto } from "./types";

export const HALTER_ASSETS = {
    logo: "/images/asset/wp-content/uploads/2026/01/halter-logo.webp",
    favicon:
        "https://haltercoffee.com/wp-content/uploads/2026/01/halter-favicon.png",
    checkerboard1:
        "https://haltercoffee.com/wp-content/uploads/2026/01/checkerboard1.webp",
    checkerboard2: "/images/asset/checkerboard2.webp",
    stickers: {
        welcome:
            "https://haltercoffee.com/wp-content/uploads/2026/01/welcome-300x133.png",
        dailyDose:
            "https://haltercoffee.com/wp-content/uploads/2026/01/daily-dose.png",
        sticker1:
            "https://haltercoffee.com/wp-content/uploads/2026/01/sticker-1-300x300.png",
        spendTime:
            "https://haltercoffee.com/wp-content/uploads/2026/01/spend-time-300x272.png",
        eyes: "https://haltercoffee.com/wp-content/uploads/2026/01/eyes.png",
        smiley: "https://haltercoffee.com/wp-content/uploads/2026/01/smiley-300x300.png",
        gotToGrid:
            "https://haltercoffee.com/wp-content/uploads/2026/01/got-to-grid-300x202.png",
        yummyFoods:
            "https://haltercoffee.com/wp-content/uploads/2026/01/yummy-foods-300x158.png",
        goodVibes:
            "https://haltercoffee.com/wp-content/uploads/2026/01/good-vibess.png",
        waveRed:
            "https://haltercoffee.com/wp-content/uploads/2026/01/wave-red.png",
        waveBlue:
            "https://haltercoffee.com/wp-content/uploads/2026/01/wave-bluee.png",
        waveBg: "https://haltercoffee.com/wp-content/uploads/2026/01/wave-bg.png",
    },
    icons: {
        star6: "https://haltercoffee.com/wp-content/uploads/2026/01/icon-1.png",
        speed15:
            "https://haltercoffee.com/wp-content/uploads/2026/01/icon-2.png",
        volcanoPizza:
            "https://haltercoffee.com/wp-content/uploads/2026/01/icon-3.png",
        togetherness:
            "https://haltercoffee.com/wp-content/uploads/2026/01/icon-6.png",
    },
};

export const MENU_ITEMS: MenuItem[] = [
    {
        id: "tiger-bomb",
        name: "Tiger Bomb",
        category: "coffee",
        price: 24000,
        priceFormatted: "Rp. 24.000",
        tagline:
            "Coffee Special Series dengan Orange, Vanilla Cream & Salted Ristretto",
        description:
            "Tiger Bomb adalah kreasi Coffee Special Series dengan perpaduan salted ristretto yang bold, secret milk yang creamy, vanilla cream yang lembut, serta orange mix dan orange peel yang memberikan sentuhan citrus segar. Kombinasi rasa manis, creamy, citrus, dan bold menciptakan sensasi kopi yang unik dan berkarakter.",
        image: "https://haltercoffee.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-24-2026-08_22_50-AM.png",
        badge: "Must Try 🔥",
        isSignature: true,
        flavorProfile: {
            sweetness: 4,
            boldness: 5,
            creaminess: 5,
        },
        ingredients: [
            "Salted Ristretto",
            "Secret Milk",
            "Vanilla Cream",
            "Orange Mix",
            "Fresh Orange Peel",
        ],
    },
    {
        id: "es-kopi-susu-pendahuluan",
        name: "Es Kopi Susu Pendahuluan",
        category: "coffee",
        price: 22000,
        priceFormatted: "Rp. 22.000",
        tagline: "Kopi Susu Creamy dan Menyegarkan",
        description:
            "Es Kopi Susu Pendahuluan adalah perpaduan kopi pilihan dengan susu segar yang lembut dan creamy. Rasa kopi yang ringan dan aromatik berpadu dengan tingkat kemanisan yang pas, menjadikannya pilihan sempurna untuk menemani obrolan santai atau pengisi semangat harianmu.",
        image: "https://haltercoffee.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-24-2026-03_29_50-AM.png",
        badge: "Best Seller ☕️",
        isSignature: true,
        flavorProfile: {
            sweetness: 3,
            boldness: 3,
            creaminess: 4,
        },
        ingredients: [
            "Espresso Blend Halter",
            "Fresh Milk",
            "Organic Brown Sugar",
            "Ice Cubes",
        ],
    },
    {
        id: "mac-and-cheese-chicken",
        name: "Mac and Cheese Chicken",
        category: "pasta",
        price: 27000,
        priceFormatted: "Rp. 27.000",
        tagline: "Pasta Keju Creamy dengan Ayam Juicy",
        description:
            "Mac and Cheese Chicken adalah menu main course berupa pasta dengan saus keju creamy dan lelehan mozzarella yang melimpah, dipadukan dengan potongan pan-seared chicken yang juicy serta sentuhan rempah gurih khas Halter Kitchen.",
        image: "https://haltercoffee.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-23-2026-04_49_06-PM.png",
        badge: "Chef Choice 🧀",
        isSignature: true,
        flavorProfile: {
            sweetness: 1,
            boldness: 4,
            creaminess: 5,
        },
        ingredients: [
            "Elbow Macaroni",
            "Melted Mozzarella",
            "Cheddar Sauce",
            "Pan-Seared Chicken",
            "Oregano Herb",
        ],
    },
    {
        id: "the-volcano-pizza",
        name: "The Volcano Pizza",
        category: "pizza",
        price: 48000,
        priceFormatted: "Rp. 48.000",
        tagline: "Pizza Khas Halter dengan Ledakan Keju & Daging",
        description:
            "The Volcano Pizza adalah menu legendaris Halter Coffee yang dirancang untuk dinikmati bersama. Adonan sourdough tipis renyah dengan topping daging asap premium, lelehan keju mozzarella bertingkat, dan saus lava merah rahasia yang meletup saat digigit!",
        image: "https://haltercoffee.com/wp-content/uploads/2026/02/Semua-momen-bisa-dirayakan-dengan-makan-bersama.Apalagi-bersama-Pizzanya-Halter-Coffee🍕Kumpul-k-768x960.webp",
        badge: "Iconic Pizza 🍕",
        isSignature: true,
        flavorProfile: {
            sweetness: 2,
            boldness: 5,
            creaminess: 5,
        },
        ingredients: [
            "Crispy Sourdough Base",
            "Smoked Beef",
            "Double Mozzarella",
            "Volcano Secret Sauce",
            "Bell Peppers",
        ],
    },
    {
        id: "es-kopi-susu-isi",
        name: "Es Kopi Susu Isi",
        category: "coffee",
        price: 23000,
        priceFormatted: "Rp. 23.000",
        tagline: "Sensasi Kopi Susu dengan Body Lebih Tebal",
        description:
            "Varian kedua dari trilogi Halter (Pendahuluan - Isi - Penutup). Karakter biji kopi pilihan dengan roast profile medium-dark, menghasilkan body kopi yang lebih mantap bagi para pecinta espresso tebal.",
        image: "https://haltercoffee.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-24-2026-03_29_50-AM.png",
        badge: "Stronger ⚡️",
        flavorProfile: {
            sweetness: 2,
            boldness: 5,
            creaminess: 3,
        },
        ingredients: [
            "House Blend Arabica-Robusta",
            "Fresh Milk",
            "Palm Nectar",
        ],
    },
    {
        id: "halter-truffle-fries",
        name: "Halter Truffle Fries",
        category: "snacks",
        price: 20000,
        priceFormatted: "Rp. 20.000",
        tagline: "Kentang Goreng Krispi dengan Aroma Truffle Mewah",
        description:
            "Kentang goreng garing keemasan ditaburi garam laut Mediterania, serbuk parmesan gurih, dan percikan minyak truffle murni aromatik.",
        image: "https://haltercoffee.com/wp-content/uploads/2026/01/yummy-foods-300x158.png",
        badge: "Snack Favorit 🍟",
        flavorProfile: {
            sweetness: 1,
            boldness: 4,
            creaminess: 2,
        },
        ingredients: [
            "Shoestring Fries",
            "Truffle Oil",
            "Parmesan",
            "Sea Salt",
            "Parsley",
        ],
    },
    {
        id: "berry-bliss-cooler",
        name: "Berry Bliss Cooler",
        category: "non-coffee",
        price: 23000,
        priceFormatted: "Rp. 23.000",
        tagline: "Segar dan Asam Manis Alami Campuran Buah Beri",
        description:
            "Pilihan segar non-kopi yang memadukan sari buah berry murni, sirup jeruk nipis peras, dan soda berkarbonasi dingin yang menyegarkan dahaga.",
        image: "https://haltercoffee.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-24-2026-08_22_50-AM.png",
        badge: "Refreshing 🍓",
        flavorProfile: {
            sweetness: 4,
            boldness: 2,
            creaminess: 1,
        },
        ingredients: [
            "Wild Berry Puree",
            "Fresh Lime",
            "Sparkling Soda",
            "Mint Leaves",
        ],
    },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
    {
        id: "gal-1",
        url: "https://haltercoffee.com/wp-content/uploads/2026/02/Cuaca-yang-tidak-menentu-bukan-berarti-menghalangimu-untuk-tetap-berada-di-sini.Area-semi-outdoo-768x960.webp",
        caption:
            "Area semi-outdoor yang sejuk dan asri, cocok di segala cuaca.",
        category: "semi-outdoor",
    },
    {
        id: "gal-2",
        url: "https://haltercoffee.com/wp-content/uploads/2026/02/Karena-kebahagiaan-sering-kali-sesederhana-nongkrong-bareng-sambil-menikmati-menu-kesukaan.Mau-n-1-768x960.webp",
        caption: "Nongkrong santai bertamu ke Halter bareng teman tercinta.",
        category: "moments",
    },
    {
        id: "gal-3",
        url: "https://haltercoffee.com/wp-content/uploads/2026/02/Karena-kebahagiaan-sering-kali-sesederhana-nongkrong-bareng-sambil-menikmati-menu-kesukaan.Mau-n-2-768x961.webp",
        caption: "Diskusi hangat, bertukar ide, dan tawa di sudut meja kopi.",
        category: "indoor",
    },
    {
        id: "gal-4",
        url: "https://haltercoffee.com/wp-content/uploads/2026/02/Karena-kebahagiaan-sering-kali-sesederhana-nongkrong-bareng-sambil-menikmati-menu-kesukaan.Mau-n-768x960.webp",
        caption: "Secangkir kopi dan Volcano Pizza hangat menemani soremu.",
        category: "moments",
    },
    {
        id: "gal-5",
        url: "https://haltercoffee.com/wp-content/uploads/2026/02/Semua-usia-bisa-quality-time-di-sini🤩Gak-hanya-muda-mudi-aja-kamu-juga-bisa-ajak-sekeluarga-b-768x960.webp",
        caption:
            "Semua usia bisa quality time di sini, bawa keluarga ataupun teman.",
        category: "semi-outdoor",
    },
    {
        id: "gal-6",
        url: "https://haltercoffee.com/wp-content/uploads/2026/02/Semua-momen-bisa-dirayakan-dengan-makan-bersama.Apalagi-bersama-Pizzanya-Halter-Coffee🍕Kumpul-k-768x960.webp",
        caption: "Semua momen dirayakan dengan makan bersama pizza Halter!",
        category: "indoor",
    },
];

export const CAFE_INFO = {
    name: "Halter Coffee",
    tagline: "Merayakan Momen Kebersamaan",
    address:
        "Jl. Ngantang No.47A, Lowokwaru, Kec. Lowokwaru, Kota Malang, Jawa Timur 65111",
    googleMapsUrl:
        "https://maps.google.com/?q=Halter+Coffee+Jl.+Ngantang+No.47A+Lowokwaru+Malang",
    hours: "Setiap Hari : 11.00 - 00.00 WIB",
    openHour: 11,
    closeHour: 24, // midnight
    instagram: "https://instagram.com/haltercoffee",
    whatsapp: "6281234567890",
    whatsappDefaultText:
        "Halo Halter Coffee! Saya ingin memesan / reservasi tempat.",
};
