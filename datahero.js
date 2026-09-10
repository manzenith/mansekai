// datahero.js

const charactersData = [
    {
        "code": "Tokyo Series",
        "name": "Mizuki Aoi",
        "label": "High School Student",
        "bio": "Siswi SMA penuh semangat asal Tokyo, Jepang yang cerdas dan aktif dalam berbagai kegiatan sekolah. Dikenal dengan kepribadiannya yang ceria, rasa ingin tahu yang tinggi, serta tekad kuat dalam meraih impian dan menghadapi tantangan masa muda.",
        "image": "img/Mizuki_Aoi/poster.png",
        "link": "character/mizuki_aoi.html"
    },
    {
        "code": "Tokyo Series",
        "name": "Hoshino Koharu",
        "label": "Idol Specialist",
        "bio": "Idol bertalenta asal Tokyo, Jepang yang memiliki karisma panggung memikat dan energi luar biasa. Dikenal dengan penampilan memukau, keahlian menari serta bernyanyi yang prima, dan dedikasi tinggi dalam menginspirasi para penggemarnya.",
        "image": "img/Hoshino_Koharu/poster.png",
        "link": "character/hoshino_koharu.html"
    },
    {
        "code": "Seoul Series",
        "name": "Kang Minji",
        "label": "Vocal Specialist",
        "bio": "Penyanyi berbakat asal Seoul, Korea Selatan yang memiliki jangkauan vokal memukau dan keahlian performa panggung luar biasa. Dikenal dengan karakter suara yang kuat, aura panggung yang memikat, serta dedikasi tinggi dalam menciptakan karya musik populer.",
        "image": "img/Kang_Minji/poster.png",
        "link": "character/kang_minji.html"
    },
    {
        "code": "Beijing Series",
        "name": "Chen Yuxin",
        "label": "Scientific Specialist",
        "bio": "Ilmuwan jenius asal Beijing, Cina yang menguasai riset teknologi tingkat tinggi dan analisis data kompleks. Dikenal dengan pemikiran inovatif, kecerdasan analitis yang luar biasa, serta ketelitian tinggi dalam menciptakan solusi ilmiah di masa depan.",
        "image": "img/Chen_Yuxin/poster.png",
        "link": "character/chen_yuxin.html"
    },
    {
        "code": "Washington Series",
        "name": "Emily Carter",
        "label": "Medical Specialist",
        "bio": "Dokter bedah berbakat asal Washington, Amerika Serikat yang menguasai prosedur medis darurat dan penanganan trauma berat di situasi kritis. Dikenal dengan ketenangan luar biasa, dedikasi tanpa batas, serta keahlian tinggi dalam menyelamatkan nyawa di bawah tekanan.",
        "image": "img/Emily_Carter/poster.png",
        "link": "character/emily_carter.html"
    },
    {
        "code": "Madrid Series",
        "name": "Valeria Torres",
        "label": "Police Specialist",
        "bio": "Inspektur polisi berpengalaman asal Madrid, Spanyol yang tangguh dalam investigasi kriminal dan taktik penyergapan cepat. Dikenal dengan dedikasi tinggi, kecerdasan analitis yang tajam, serta keberanian luar biasa dalam menegakkan keadilan.",
        "image": "img/Valeria_Torres/poster.png",
        "link": "character/valeria_torres.html"
    },
    {
        "code": "Moscow Series",
        "name": "Anastasia Petrova",
        "label": "Military Specialist",
        "bio": "Prajurit taktis berbakat asal Moskow, Rusia yang menguasai strategi tempur tingkat tinggi dan ketahanan fisik luar biasa di medan ekstrem. Terkenal dengan disiplin baja, kecermatan tinggi, serta ketenangan dalam mengambil keputusan di bawah tekanan.",
        "image": "img/Anastasia_Petrova/poster.png",
        "link": "character/anastasia_petrova.html"
    },
    {
        "code": "Shanghai Series", 
        "name": "Li Mei Lin",
        "label": "Toko Barang Antik Apprentice",
        "bio": "Seorang gadis muda yang tumbuh di tengah artefak kuno di toko barang antik keluarganya di pecinan. Dia memiliki mata yang tajam untuk mengidentifikasi sejarah dan nilai barang antik, serta rasa ingin tahu yang besar akan cerita-cerita yang tersembunyi di baliknya.",
        "image": "img/Li_Mei_Lin/poster.png", 
        "link": "character/li_mei_lin.html" 
    },
    {
        code: "Seoul Series",
        name: "Han Seo-yeon",
        label: "Swimming Coach",
        bio: "Pelatih renang berbakat asal Seoul, Korea Selatan yang menggabungkan kelincahan di dalam air dengan ketahanan fisik luar biasa. Terkenal dengan gerakan yang sangat cepat dan teknik eksekusi yang presisi.",
        image: "img/Han_Seo-yeon/poster.png",
        link: "character/han_seo-yeon.html"
    },
    {
        code: "Paris Series",
        name: "Elise Moreau",
        label: "Fashion Designer / Needle Weaver",
        bio: "Desainer fashion berbakat asal Paris, Prancis yang memadukan keindahan busana tinggi dengan keahlian bertarung. Terkenal dengan gaya bertarung anggun dan jarum jahit pemotong benang yang presisi.",
        image: "img/Elise_Moreau/poster.png",
        link: "character/elise_moreau.html"
    },
    {
        code: "Bologna Series",
        name: "Sofia Moretti",
        label: "Culinary Master / Blade Striker",
        bio: "Chef berbakat dari Bologna, Italia yang lihai mengolah bahan makanan sekaligus bertarung. Terkenal dengan gerakan lincah dan ketepatan serangan bak memotong bahan masakan.",
        image: "img/Sofia_Moretti/poster.png",
        link: "character/sofia_moretti.html"
    },
    {
        code: "London Series",
        name: "Katarina Grace",
        label: "Out-Boxer / Street Striker",
        bio: "Petarung wanita tangguh dari arena jalanan London, Inggris. Terkenal dengan kombinasi pukulan cepat dan daya tahan luar biasa.",
        image: "img/Katarina_Grace/poster.png",
        link: "character/katarina_grace.html"
    },
    {
        code: "Tokyo Series",
        name: "Momona Matsumoto",
        label: "Stage Idol & Fashion Model",
        bio: "Idol serbabisa yang memikat panggung dunia dengan tarian energik, suara memukau, serta aura karismatik yang membakar semangat para penggemarnya.",
        image: "img/Momona_Matsumoto/poster.png",
        link: "character/momona_matsumoto.html"
    },
    {
        code: "Bandung Series",
        name: "Titania Felycia",
        label: "Visual Artist & Illustrator",
        bio: "Seniman lukis berbakat berwibawa yang mampu mengekspresikan emosi dan keindahan melalui goresan kuas serta karya lukisan bergaya elegan.",
        image: "img/Titania_Felycia/poster.png",
        link: "character/titania_felycia.html"
    },
    {
        code: "Bandung Series",
        name: "Firman Hidayat",
        label: "Trader & Developer",
        bio: "Analis pasar rasional dan developer independen dari Bandung. Lulusan TKJ dan S1 Manajemen Bisnis yang memadukan logika IT dengan strategi finansial.",
        image: "img/Firman_Hidayat/poster.png",
        link: "character/firman_hidayat.html"
    }
];