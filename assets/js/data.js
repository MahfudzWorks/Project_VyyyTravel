const destinations = [
    {
        id: 1,
        title: "Bromo Sunrise",
        location: "Jawa Timur",
        rating: 4.9,
        price: "Rp 950.000",
        image: "assets/images/bromo.jpg"
    },
    {
        id: 2,
        title: "Kawah Ijen",
        location: "Banyuwangi",
        rating: 4.8,
        price: "Rp 750.000",
        image: "assets/images/ijen.jpg"
    },
    {
        id: 3,
        title: "Banyuwangi Trip",
        location: "Banyuwangi",
        rating: 4.7,
        price: "Rp 1.200.000",
        image: "assets/images/banyuwangi.jpg"
    },
    {
        id: 4,
        title: "Bali Paradise",
        location: "Bali",
        rating: 4.9,
        price: "Rp 2.500.000",
        image: "assets/images/bali.jpg"
    },
    {
        id: 5,
        title: "Yogyakarta Heritage",
        location: "Yogyakarta",
        rating: 4.8,
        price: "Rp 1.100.000",
        image: "assets/images/jogja.jpg"
    },
    {
        id: 6,
        title: "Labuan Bajo",
        location: "Nusa Tenggara Timur",
        rating: 5.0,
        price: "Rp 4.500.000",
        image: "assets/images/labuan-bajo.jpg"
    },
    {
        id: 7,
        title: "Raja Ampat",
        location: "Papua Barat",
        rating: 5.0,
        price: "Rp 7.800.000",
        image: "assets/images/raja-ampat.jpg"
    },
    {
        id: 8,
        title: "Dieng Plateau",
        location: "Jawa Tengah",
        rating: 4.6,
        price: "Rp 850.000",
        image: "assets/images/dieng.jpg"
    },
    {
        id: 9,
        title: "Tumpak Sewu",
        location: "Jawa Timur",
        rating: 4.8,
        price: "Rp 650.000",
        image: "assets/images/tumpak-sewu.jpg"
    },
    {
        id: 10,
        title: "Nusa Penida",
        location: "Bali",
        rating: 4.9,
        price: "Rp 1.300.000",
        image: "assets/images/nusa-penida.jpg"
    },
    {
        id: 11,
        title: "Mount Rinjani",
        location: "Nusa Tenggara Barat",
        rating: 4.9,
        price: "Rp 2.100.000",
        image: "assets/images/rinjani.jpg"
    },
    {
        id: 12,
        title: "Komodo Island",
        location: "Nusa Tenggara Timur",
        rating: 4.9,
        price: "Rp 3.900.000",
        image: "assets/images/komodo.jpg"
    }
];

const imagePlaceholders = {
    "assets/images/bromo.jpg": "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
    "assets/images/ijen.jpg": "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80",
    "assets/images/banyuwangi.jpg": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    "assets/images/bali.jpg": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    "assets/images/jogja.jpg": "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80",
    "assets/images/labuan-bajo.jpg": "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80",
    "assets/images/raja-ampat.jpg": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    "assets/images/dieng.jpg": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "assets/images/tumpak-sewu.jpg": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
    "assets/images/nusa-penida.jpg": "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80",
    "assets/images/rinjani.jpg": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    "assets/images/komodo.jpg": "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80"
};

const tourPackages = [
    {
        title: "3D2N Bromo Magic",
        price: "Rp 1.450.000",
        duration: "3 Days 2 Nights",
        hotel: true,
        transport: true,
        guide: true
    },
    {
        title: "4D3N Bali Paradise",
        price: "Rp 3.200.000",
        duration: "4 Days 3 Nights",
        hotel: true,
        transport: true,
        guide: true
    },
    {
        title: "2D1N Ijen Blue Fire",
        price: "Rp 890.000",
        duration: "2 Days 1 Night",
        hotel: true,
        transport: true,
        guide: true
    },
    {
        title: "5D4N Jogja Cultural",
        price: "Rp 2.800.000",
        duration: "5 Days 4 Nights",
        hotel: true,
        transport: true,
        guide: true
    },
    {
        title: "Open Trip Labuan Bajo",
        price: "Rp 4.990.000",
        duration: "3 Days 2 Nights",
        hotel: true,
        transport: true,
        guide: true
    },
    {
        title: "Private Trip Banyuwangi",
        price: "Rp 2.100.000",
        duration: "3 Days 2 Nights",
        hotel: true,
        transport: true,
        guide: true
    }
];

const features = [
    {
        icon: "fa-user-tie",
        title: "Experienced Guide",
        desc: "Professional local guides dedicated to giving you an authentic experience."
    },
    {
        icon: "fa-tags",
        title: "Affordable Price",
        desc: "Best quality travel experiences offered with transparent and fair pricing."
    },
    {
        icon: "fa-map-marked-alt",
        title: "Best Destination",
        desc: "Handpicked top destinations across Indonesia for unforgettable trips."
    },
    {
        icon: "fa-shield-alt",
        title: "Safe Journey",
        desc: "Your safety and comfort are our top priority during every tour."
    },
    {
        icon: "fa-hotel",
        title: "Hotel Included",
        desc: "Comfortable and luxury accommodations included in all main packages."
    },
    {
        icon: "fa-headset",
        title: "24/7 Support",
        desc: "Round-the-clock customer support ready to assist you anytime."
    }
];

const galleryImages = [
    "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"
];

const testimonials = [
    {
        name: "Budi Santoso",
        role: "Adventure Enthusiast",
        avatar: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        comment: "Pengalaman trip Bromo dengan VyyyTravel sangat luar biasa! Guide ramah, fasilitas lengkap, dan sunrise view-nya tak terlupakan."
    },
    {
        name: "Siti Rahmawati",
        role: "Photographer",
        avatar: "https://i.pravatar.cc/150?img=5",
        rating: 5,
        comment: "Sangat puas dengan open trip Labuan Bajo! Dokumentasi bagus, kapal nyaman, dan itin teratur."
    },
    {
        name: "Agus Pratama",
        role: "Family Traveler",
        avatar: "https://i.pravatar.cc/150?img=3",
        rating: 5,
        comment: "Liburan keluarga di Bali jadi jauh lebih tenang berkat VyyyTravel. Hotel impian dan itinerary pas tidak bikin capek."
    },
    {
        name: "Dewi Lestari",
        role: "Solo Traveler",
        avatar: "https://i.pravatar.cc/150?img=9",
        rating: 5,
        comment: "Awalnya ragu ikutan solo trip ke Kawah Ijen, tapi pelayanannya ramah banget dan terasa sangat aman. Recommended!"
    },
    {
        name: "Eko Wijaya",
        role: "Content Creator",
        avatar: "https://i.pravatar.cc/150?img=11",
        rating: 5,
        comment: "Trip Raja Ampat berjalan sempurna. Pelayanan profesional dari booking awal sampai pulang."
    },
    {
        name: "Nia Kurniawati",
        role: "Honeymooner",
        avatar: "https://i.pravatar.cc/150?img=20",
        rating: 5,
        comment: "Honeymoon di Nusa Penida dipersiapkan dengan sangat romantis dan detail. Terima kasih banyak VyyyTravel!"
    }
];

const faqs = [
    {
        question: "Bagaimana cara melakukan pemesanan tur di VyyyTravel?",
        answer: "Anda dapat memilih paket tur di website kami lalu mengklik tombol 'Book Now' untuk mengisi form pemesanan atau langsung menghubungi CS kami via WhatsApp."
    },
    {
        question: "Apakah metode pembayaran bisa diangsur?",
        answer: "Ya, kami menyediakan opsi pembayaran DP minimal 30% saat booking dan pelunasan dilakukan maksimal H-3 sebelum keberangkatan."
    },
    {
        question: "Apakah open trip aman untuk traveler sendirian (solo traveler)?",
        answer: "Sangat aman! Open trip kami dirancang ramah bagi solo traveler dengan pengawasan tour leader profesional."
    },
    {
        question: "Bagaimana jika cuaca buruk saat hari keberangkatan?",
        answer: "Keamanan Anda adalah prioritas kami. Jika terjadi keadaan darurat/cuaca ekstrem, jadwal akan disesuaikan atau dijadwal ulang (reschedule)."
    },
    {
        question: "Apakah paket tur sudah termasuk tiket pesawat?",
        answer: "Paket standar kami belum termasuk tiket pesawat. Namun, tim kami siap membantu pemesanan tiket sesuai kebutuhan Anda."
    },
    {
        question: "Fasilitas apa saja yang umumnya didapatkan?",
        answer: "Sebagian besar paket sudah mencakup akomodasi hotel, transportasi AC, konsumsi, tiket masuk wisata, dan guide profesional."
    },
    {
        question: "Apakah ada biaya tersembunyi (hidden fee)?",
        answer: "Tidak ada. Semua biaya tercantum transparan sesuai dengan deskripsi paket yang Anda pilih."
    },
    {
        question: "Bagaimana kebijakan pembatalan (cancellation policy)?",
        answer: "Pembatalan H-7 mendapatkan pengembalian DP sebesar 50%. Syarat dan ketentuan lengkap berlaku sesuai kontrak pemesanan."
    }
];