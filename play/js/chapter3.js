const chapter3aScript = [
    {
        bg: "https://i.pinimg.com/736x/b3/3a/fd/b33afda2ad522a4b5ad7b1c328288adc.jpg",
        image: "../img/Firman_Hidayat/HD_Man.png",
        speaker: "Firman",
        role: "MC",
        location: "Kamar",
        text: "Aku memberanikan diri membuka buku misterius itu. Tiba-tiba cahaya terang menyilaukan mata...",
        overplay: "",
        nextstep: null
    }
];

const chapter3bScript = [
    {
        bg: "https://i.pinimg.com/736x/b3/3a/fd/b33afda2ad522a4b5ad7b1c328288adc.jpg",
        image: "../img/Firman_Hidayat/HD_Man.png",
        speaker: "Firman",
        role: "MC",
        location: "Kamar",
        text: "Aku memutuskan untuk menutup laci dan mengabaikannya. Lebih baik kembali fokus ngoding.",
        overplay: "",
        nextstep: null
    }
];

const chapter3Script = [
    {
        bg: "https://i.pinimg.com/736x/b3/3a/fd/b33afda2ad522a4b5ad7b1c328288adc.jpg",
        image: "../img/Firman_Hidayat/HD_Man.png",
        speaker: "Firman",
        role: "MC",
        location: "Kamar",
        text: "Akhirnya aku punya waktu luang untuk membereskan laci kakek ini.",
        overplay: ""
    },
    {
        bg: "https://i.pinimg.com/736x/b3/3a/fd/b33afda2ad522a4b5ad7b1c328288adc.jpg",
        image: "../img/Firman_Hidayat/HD_Man.png",
        speaker: "Firman",
        role: "MC",
        location: "Kamar",
        text: "Tunggu, apa ini? Buku tua bersampul aneh terselip di sudut laci.",
        overplay: "../img/books.webp"
    },
    {
        bg: "https://i.pinimg.com/736x/b3/3a/fd/b33afda2ad522a4b5ad7b1c328288adc.jpg",
        image: "../img/Firman_Hidayat/HD_Man.png",
        speaker: "Firman",
        role: "MC",
        location: "Kamar",
        text: "Sampulnya terasa dingin saat disentuh... Ada simbol misterius terukir di depannya.",
        overplay: "https://png.pngtree.com/png-vector/20240506/ourmid/pngtree-quirky-anime-book-emblem-png-image_12372344.png"
    },
    {
        bg: "https://i.pinimg.com/736x/b3/3a/fd/b33afda2ad522a4b5ad7b1c328288adc.jpg",
        image: "../img/Firman_Hidayat/HD_Man.png",
        speaker: "Firman",
        role: "MC",
        location: "Kamar",
        text: "Sebaiknya kubawa buku ini ke meja untuk memeriksanya lebih teliti.",
        overplay: "",
        choices: [
            { text: "Buka dan baca buku misterius itu sekarang", target: chapter3aScript },
            { text: "Tutup kembali lacinya dan abaikan", target: chapter3bScript }
        ]
    }
];