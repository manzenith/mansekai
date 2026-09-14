// --- SKRIP CABANG CHAPTER 2 (2A - 2E) DENGAN UPDATE SKILL OTOMATIS ---

const finishChapter2A_sempurna = [
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Kamar Firman",
        text: "Mantap! Kuis terjawab benar semua (3/3). Poin keahlian Digital Marketing bertambah 5.",
        image: "../img/Firman_Hidayat/HD_Man.png",
        skillName: "Digital Marketing",
        skillGain: 5,
        nextstep: chapter3Script
    }
];

const finishChapter2A_gagal = [
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Kamar Firman",
        text: "Wah, ada jawaban yang kurang tepat. Poin keahlian Digital Marketing cuma bertambah 1.",
        image: "../img/Firman_Hidayat/HD_Man.png",
        skillName: "Digital Marketing",
        skillGain: 1,
        nextstep: chapter3Script
    }
];

const chapter2AScript = [
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Kamar Firman",
        text: "Mending aku ulas lagi materi digital marketing tadi malam biar makin matang, sekalian nambah ilmu baru.",
        image: "../img/Firman_Hidayat/HD_Man.png"
    },
    {
        speaker: "Sistem Kuis",
        role: "Evaluasi",
        location: "Kamar Firman",
        text: "Pertanyaan 1/3: Apa tujuan utama dari SEO dalam Digital Marketing?",
        image: "",
        choices: [
            { text: "Meningkatkan traffic organik mesin pencari", nextstep: [
                {
                    speaker: "Sistem Kuis", role: "Evaluasi", location: "Kamar Firman", text: "Pertanyaan 2/3: Metode berbayar dalam iklan digital biasa disebut?", image: "",
                    choices: [
                        { text: "SEO", nextstep: [
                            {
                                speaker: "Sistem Kuis", role: "Evaluasi", location: "Kamar Firman", text: "Pertanyaan 3/3: Apa fungsi dari Call to Action (CTA)?", image: "",
                                choices: [
                                    { text: "Mengarahkan pengunjung melakukan aksi beli/klik", nextstep: finishChapter2A_gagal },
                                    { text: "Menghapus database", nextstep: finishChapter2A_gagal },
                                    { text: "Membuat server down", nextstep: finishChapter2A_gagal }
                                ]
                            }
                        ]},
                        { text: "SEM (Search Engine Marketing)", nextstep: [
                            {
                                speaker: "Sistem Kuis", role: "Evaluasi", location: "Kamar Firman", text: "Pertanyaan 3/3: Apa fungsi dari Call to Action (CTA)?", image: "",
                                choices: [
                                    { text: "Mengarahkan pengunjung melakukan aksi beli/klik", nextstep: finishChapter2A_sempurna },
                                    { text: "Menghapus database", nextstep: finishChapter2A_gagal },
                                    { text: "Membuat server down", nextstep: finishChapter2A_gagal }
                                ]
                            }
                        ]},
                        { text: "Coding Backend", nextstep: [
                            {
                                speaker: "Sistem Kuis", role: "Evaluasi", location: "Kamar Firman", text: "Pertanyaan 3/3: Apa fungsi dari Call to Action (CTA)?", image: "",
                                choices: [
                                    { text: "Mengarahkan pengunjung melakukan aksi beli/klik", nextstep: finishChapter2A_gagal },
                                    { text: "Menghapus database", nextstep: finishChapter2A_gagal },
                                    { text: "Membuat server down", nextstep: finishChapter2A_gagal }
                                ]
                            }
                        ]}
                    ]
                }
            ]},
            { text: "Membeli follower palsu", nextstep: finishChapter2A_gagal },
            { text: "Mematikan kompetitor", nextstep: finishChapter2A_gagal }
        ]
    }
];


// --- KUIS 2B: BAHASA MANDARIN ---
const finishChapter2B_sempurna = [
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Kamar Firman",
        text: "Kuis Mandarin benar semua (3/3)! Poin keahlian bahasa Mandarin bertambah 5.",
        image: "../img/Firman_Hidayat/HD_Man.png",
        skillName: "Bahasa Mandarin",
        skillGain: 5,
        nextstep: chapter3Script
    }
];

const finishChapter2B_gagal = [
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Kamar Firman",
        text: "Kurang teliti, poin keahlian Mandarin cuma bertambah 1.",
        image: "../img/Firman_Hidayat/HD_Man.png",
        skillName: "Bahasa Mandarin",
        skillGain: 1,
        nextstep: chapter3Script
    }
];

const chapter2BScript = [
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Kamar Firman",
        text: "Mumpung lagi santai, aku mau cicil belajar bahasa Mandarin dasar.",
        image: "../img/Firman_Hidayat/HD_Man.png"
    },
    {
        speaker: "Sistem Kuis",
        role: "Evaluasi",
        location: "Kamar Firman",
        text: "Pertanyaan 1/3: Apa arti dari 'Nǐ hǎo' (你好) dalam bahasa Mandarin?",
        image: "",
        choices: [
            { text: "Halo", nextstep: [
                {
                    speaker: "Sistem Kuis", role: "Evaluasi", location: "Kamar Firman", text: "Pertanyaan 2/3: Bagaimana cara mengucapkan 'Terima kasih' dalam Mandarin?", image: "",
                    choices: [
                        { text: "Xièxie", nextstep: [
                            {
                                speaker: "Sistem Kuis", role: "Evaluasi", location: "Kamar Firman", text: "Pertanyaan 3/3: Angka '1' dalam bahasa Mandarin dibaca?", image: "",
                                choices: [
                                    { text: "Yi", nextstep: finishChapter2B_sempurna },
                                    { text: "Er", nextstep: finishChapter2B_gagal },
                                    { text: "San", nextstep: finishChapter2B_gagal }
                                ]
                            }
                        ]},
                        { text: "Zàijiàn", nextstep: finishChapter2B_gagal },
                        { text: "Bú kèqi", nextstep: finishChapter2B_gagal }
                    ]
                }
            ]},
            { text: "Selamat tinggal", nextstep: finishChapter2B_gagal },
            { text: "Terima kasih", nextstep: finishChapter2B_gagal }
        ]
    }
];


// --- KUIS 2C: PROJECT APLIKASI (Bonus Rp 1.000.000 & +5 Coding) ---
const finishChapter2C_sukses = [
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Kamar Firman",
        text: "Yes! Kuis benar semua (3/3). Project aplikasi selesai sempurna! Bonus Rp 1.000.000 & Skill Coding +5.",
        image: "../img/Firman_Hidayat/HD_Man.png",
        moneyReward: 1000000,
        skillName: "Coding",
        skillGain: 5,
        nextstep: chapter3Script
    }
];

const finishChapter2C_gagal = [
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Kamar Firman",
        text: "Sial, ada jawaban yang salah. Project aplikasi gagal dibuat atau belum selesai.",
        image: "../img/Firman_Hidayat/HD_Man.png",
        nextstep: chapter3Script
    }
];

const chapter2CScript = [
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Kamar Firman",
        text: "Daripada gabut, mending aku ngebut ngerjain project aplikasi client.",
        image: "../img/Firman_Hidayat/HD_Man.png"
    },
    {
        speaker: "Sistem Kuis",
        role: "Evaluasi",
        location: "Kamar Firman",
        text: "Pertanyaan 1/3: Bahasa pemrograman apa yang biasa dipakai untuk styling tampilan web?",
        image: "",
        choices: [
            { text: "CSS", nextstep: [
                {
                    speaker: "Sistem Kuis", role: "Evaluasi", location: "Kamar Firman", text: "Pertanyaan 2/3: Apa fungsi utama dari Git dalam pembuatan project?", image: "",
                    choices: [
                        { text: "Version control / manajemen kode", nextstep: [
                            {
                                speaker: "Sistem Kuis", role: "Evaluasi", location: "Kamar Firman", text: "Pertanyaan 3/3: Database non-relational populer yang sering digunakan adalah?", image: "",
                                choices: [
                                    { text: "MongoDB", nextstep: finishChapter2C_sukses },
                                    { text: "Microsoft Excel", nextstep: finishChapter2C_gagal },
                                    { text: "Notepad", nextstep: finishChapter2C_gagal }
                                ]
                            }
                        ]},
                        { text: "Mempercepat koneksi", nextstep: finishChapter2C_gagal },
                        { text: "Membersihkan RAM", nextstep: finishChapter2C_gagal }
                    ]
                }
            ]},
            { text: "Python", nextstep: finishChapter2C_gagal },
            { text: "C++", nextstep: finishChapter2C_gagal }
        ]
    }
];


// --- KUIS 2D: TRADING XAU (Bonus Rp 3.000.000 & +5 Trading) ---
const finishChapter2D_profit = [
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Kamar Firman",
        text: "Analisis benar semua (3/3)! Trading XAU profit sukses. Bonus saldo Rp 3.000.000 & Skill Trading +5.",
        image: "../img/Firman_Hidayat/HD_Man.png",
        moneyReward: 3000000,
        skillName: "Trading",
        skillGain: 5,
        nextstep: chapter3Script
    }
];

const finishChapter2D_loss = [
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Kamar Firman",
        text: "Sial, analisis meleset! Ada jawaban yang salah, posisi trading kena minus Rp 1.000.000.",
        image: "../img/Firman_Hidayat/HD_Man.png",
        moneyPenalty: 1000000,
        nextstep: chapter3Script
    }
];

const chapter2DScript = [
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Kamar Firman",
        text: "Analisa market XAU (Gold) hari ini kelihatannya lagi ada peluang setup.",
        image: "../img/Firman_Hidayat/HD_Man.png"
    },
    {
        speaker: "Sistem Kuis",
        role: "Evaluasi",
        location: "Kamar Firman",
        text: "Pertanyaan 1/3: Kode ticker resmi untuk instrumen trading emas dunia adalah?",
        image: "",
        choices: [
            { text: "XAUUSD", nextstep: [
                {
                    speaker: "Sistem Kuis", role: "Evaluasi", location: "Kamar Firman", text: "Pertanyaan 2/3: Istilah ketika harga menembus level resistance atas disebut?", image: "",
                    choices: [
                        { text: "Breakout", nextstep: [
                            {
                                speaker: "Sistem Kuis", role: "Evaluasi", location: "Kamar Firman", text: "Pertanyaan 3/3: Manajemen risiko penting dalam trading agar terhindar dari?", image: "",
                                choices: [
                                    { text: "Bangkrut / Akun Ludes", nextstep: finishChapter2D_profit },
                                    { text: "Koneksi lambat", nextstep: finishChapter2D_loss },
                                    { text: "Laptop rusak", nextstep: finishChapter2D_loss }
                                ]
                            }
                        ]},
                        { text: "Breakdown", nextstep: finishChapter2D_loss },
                        { text: "Margin Call", nextstep: finishChapter2D_loss }
                    ]
                }
            ]},
            { text: "BTCUSD", nextstep: finishChapter2D_loss },
            { text: "USOIL", nextstep: finishChapter2D_loss }
        ]
    }
];


// --- CHAPTER 2E: REBAHAN ---
const chapter2EScript = [
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Kamar Firman",
        text: "Ah, males banget mikir macam-macam hari ini. Mending rebahan, tidur pulas.",
        image: "../img/Firman_Hidayat/HD_Man.png"
    },
    {
        speaker: "",
        role: "",
        location: "Kamar Firman",
        text: "Firman langsung merebahkan tubuhnya ke kasur dan terlelap tanpa melakukan apa pun.",
        image: "",
        bgm: "stop",
        nextstep: chapter3Script
    }
];


// --- SKRIP UTAMA CHAPTER 2 ---
const chapter2Script = [
    {
        speaker: "",
        role: "",
        location: "Balai Warga / Tempat Pelatihan",
        text: "Suasana balai warga tampak cukup ramai oleh para peserta yang mendaftar pelatihan sertifikasi Digital Marketing gratis dari brosur rekomendasi Mamah.",
        bg: "https://i.pinimg.com/736x/b3/3a/fd/b33afda2ad522a4b5ad7b1c328288adc.jpg",
        image: "",
        bgm: "audio/campus-cheerful.mp3"
    },
    {
        speaker: "",
        role: "",
        location: "Balai Warga / Tempat Pelatihan",
        text: "Saat Firman sedang mengisi daftar hadir di meja registrasi, pandangannya tiba-tiba terpaku pada sesosok gadis yang duduk di barisan kursi depan.",
        image: ""
    },
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Balai Warga / Tempat Pelatihan",
        text: "(Deg!)",
        image: "../img/Firman_Hidayat/HD_Man.png"
    },
    {
        speaker: "",
        role: "",
        location: "Balai Warga / Tempat Pelatihan",
        text: "Jantung Firman berdegup kencang seketika. Pandangan pertamanya pada gadis itu langsung membuatnya jatuh cinta pada pandangan pertama. Pesona alami yang terpancar dari dirinya begitu kuat.",
        image: ""
    },
    {
        speaker: "Tania",
        role: "Peserta Pelatihan",
        location: "Balai Warga / Tempat Pelatihan",
        text: "Permisi, boleh aku pinjam bolpoin sebentar? Punya-ku mendadak habis tinta.",
        image: "../img/Titania_Felycia/HD_Titania.png"
    },
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Balai Warga / Tempat Pelatihan",
        text: "Ah, b-boleh! Silakan pakai yang ini.",
        image: "../img/Firman_Hidayat/HD_Man.png"
    },
    {
        speaker: "Tania",
        role: "Peserta Pelatihan",
        location: "Balai Warga / Tempat Pelatihan",
        text: "Makasih banyak ya! Oh iya, kenalin aku Tania.",
        image: "../img/Titania_Felycia/HD_Titania.png"
    },
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Balai Warga / Tempat Pelatihan",
        text: "Aku... Firman. Salam kenal, Tania.",
        image: "../img/Firman_Hidayat/HD_Man.png"
    },
    {
        speaker: "",
        role: "",
        location: "Balai Warga / Tempat Pelatihan",
        text: "Seiring berjalannya sesi pelatihan hari itu, Firman tanpa sadar sering mencuri-curi pandang dan memperhatikan gerak-gerik Tania.",
        image: ""
    },
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Balai Warga / Tempat Pelatihan",
        text: "(Dalam hati) Semakin aku perhatikan, Tania ternyata gadis yang sangat mandiri dan pintar. Cara dia merespons materi mentor dan mencatat poin penting benar-benar gesit dan terarah... Rasanya kekagumanku makin mendalam padanya.",
        image: "../img/Firman_Hidayat/HD_Man.png"
    },
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Balai Warga / Tempat Pelatihan",
        text: "(Dalam hati) Selama ini aku kan cuma hobi ngefans sama idol-idol Jepang maya di layar kaca seperti Momonan... tapi perasaan suka ke Tania ini rasanya jauh lebih nyata dan bikin berdebar.)",
        image: "../img/Firman_Hidayat/HD_Man.png"
    },
    {
        speaker: "Tania",
        role: "Peserta Pelatihan",
        location: "Balai Warga / Tempat Pelatihan",
        text: "Firman, kamu paham bagian rumus analitik iklan yang dijelasin mentor tadi? Boleh minta tolong jelasin dikit nggak? Kamu kelihatannya jago banget masalah teknis.",
        image: "../img/Titania_Felycia/HD_Titania.png"
    },
    {
        speaker: "Firman",
        role: "Developer & Trader",
        location: "Balai Warga / Tempat Pelatihan",
        text: "Tentu saja! Dengan senang hati bakal aku bantu jelasin sampai paham.",
        image: "../img/Firman_Hidayat/HD_Man.png"
    },
    {
        speaker: "",
        role: "",
        location: "Balai Warga / Tempat Pelatihan",
        text: "Selesai sesi pelatihan hari pertama, Firman pulang ke rumah dan merenungkan kegiatan apa yang harus ia lakukan selanjutnya...",
        image: "",
        bgm: "stop",
        choices: [
            {
                text: "Chapter 2A: Ulas materi & belajar Digital Marketing.",
                nextstep: chapter2AScript
            },
            {
                text: "Chapter 2B: Belajar bahasa Mandarin.",
                nextstep: chapter2BScript
            },
            {
                text: "Chapter 2C: Ngebut buat project aplikasi.",
                nextstep: chapter2CScript
            },
            {
                text: "Chapter 2D: Trading XAU (Gold) di market.",
                nextstep: chapter2DScript
            },
            {
                text: "Chapter 2E: Tidak melakukan apa-apa, rebahan tidur.",
                nextstep: chapter2EScript
            }
        ]
    }
];