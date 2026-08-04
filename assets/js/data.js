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

const footerContacts = [
    {
        name: "082140363716",
        url: "https://wa.me/6282140363716",
        hoverColor: "hover:text-emerald-400",
        bgColor: "bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500",
        iconSvg: `<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>`
    },
    {
        name: "@mahfudzalfa_",
        url: "https://instagram.com/mahfudzalfa_",
        hoverColor: "hover:text-pink-400",
        bgColor: "bg-pink-500/10 text-pink-500 group-hover:bg-pink-500",
        iconSvg: `<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
    },
    {
        name: "Mahfudz Alfanani Syaviqi",
        url: "https://www.linkedin.com/in/mahfudz-alfanani-syaviqi-572258321/",
        hoverColor: "hover:text-sky-400",
        bgColor: "bg-sky-500/10 text-sky-500 group-hover:bg-sky-500",
        iconSvg: `<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
    },
    {
        name: "vyyy.my.id",
        url: "https://vyyy.my.id",
        hoverColor: "hover:text-rose-400",
        bgColor: "bg-rose-500/10 text-rose-500 group-hover:bg-rose-500",
        iconSvg: `<svg class="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
    }
];