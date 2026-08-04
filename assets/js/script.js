document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('load', () => {
        const loading = document.getElementById('loading-screen');
        loading.classList.add('opacity-0');
        setTimeout(() => loading.style.display = 'none', 500);
    });

    const typingTextElem = document.getElementById('typing-text');
    const words = ["With VyyyTravel", "Your Next Adventure", "Wonderful Journeys"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingTextElem.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextElem.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 60 : 120;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }
    typeEffect();

    const destinationsGrid = document.getElementById('destinations-grid');
    const locationFilter = document.getElementById('location-filter');

    const locations = ['all', ...new Set(destinations.map(item => item.location))];
    locationFilter.innerHTML = locations.map(loc => `<option value="${loc}">${loc === 'all' ? 'All Locations' : loc}</option>`).join('');

    function renderDestinations(data) {
        destinationsGrid.innerHTML = data.map(item => {
            const imgSrc = imagePlaceholders[item.image] || item.image;
            return `
            <div class="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col group fade-in">
                <div class="relative h-56 overflow-hidden">
                    <img src="${imgSrc}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <span class="absolute top-4 right-4 glass-effect text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <i class="fas fa-star text-amber-400"></i>
                        <span>${item.rating}</span>
                    </span>
                </div>
                <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                        <span class="text-xs font-medium text-primary uppercase tracking-wider">${item.location}</span>
                        <h3 class="text-xl font-bold mt-1">${item.title}</h3>
                    </div>
                    <div class="flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
                        <div>
                            <span class="text-xs text-slate-400 block">Start from</span>
                            <span class="text-lg font-bold text-accent">${item.price}</span>
                        </div>
                        <button onclick="showToast('Selected: ${item.title}')" class="bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors">
                            Detail
                        </button>
                    </div>
                </div>
            </div>
            `;
        }).join('');
        observeElements();
    }
    renderDestinations(destinations);

    const searchInput = document.getElementById('destination-search');
    function filterDestinations() {
        const query = searchInput.value.toLowerCase();
        const selectedLoc = locationFilter.value;
        const filtered = destinations.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(query) || item.location.toLowerCase().includes(query);
            const matchesLoc = selectedLoc === 'all' || item.location === selectedLoc;
            return matchesSearch && matchesLoc;
        });
        renderDestinations(filtered);
    }
    searchInput.addEventListener('input', filterDestinations);
    locationFilter.addEventListener('change', filterDestinations);

    const packagesGrid = document.getElementById('packages-grid');
    packagesGrid.innerHTML = tourPackages.map(pkg => `
        <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 fade-in">
            <div class="space-y-4">
                <span class="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">${pkg.duration}</span>
                <h3 class="text-2xl font-bold">${pkg.title}</h3>
                <div class="text-3xl font-extrabold text-primary">${pkg.price}</div>
                <ul class="space-y-3 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700 pt-4">
                    <li class="flex items-center space-x-3">
                        <i class="fas fa-check-circle text-accent"></i>
                        <span>${pkg.hotel ? 'Hotel Included' : 'No Hotel'}</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <i class="fas fa-check-circle text-accent"></i>
                        <span>${pkg.transport ? 'Transport Included' : 'No Transport'}</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <i class="fas fa-check-circle text-accent"></i>
                        <span>${pkg.guide ? 'Professional Guide' : 'No Guide'}</span>
                    </li>
                </ul>
            </div>
            <button onclick="showToast('Booking ${pkg.title} successfully!')" class="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-2xl font-semibold shadow-md hover:shadow-primary/30 transition-all">
                Book Now
            </button>
        </div>
    `).join('');

    const featuresGrid = document.getElementById('features-grid');
    featuresGrid.innerHTML = features.map(feat => `
        <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:-translate-y-1 transition-all space-y-4 fade-in">
            <div class="w-14 h-14 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                <i class="fas ${feat.icon}"></i>
            </div>
            <h3 class="text-xl font-bold">${feat.title}</h3>
            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">${feat.desc}</p>
        </div>
    `).join('');

    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = galleryImages.map(img => `
        <div class="overflow-hidden rounded-2xl cursor-pointer group fade-in">
            <img src="${img}" alt="Gallery Image" loading="lazy" class="w-full object-cover group-hover:scale-110 transition-transform duration-500 gallery-item">
        </div>
    `).join('');

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.getElementById('close-lightbox');

    document.querySelectorAll('.gallery-item').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.remove('hidden');
            setTimeout(() => lightbox.classList.add('opacity-100'), 10);
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('opacity-100');
        setTimeout(() => lightbox.classList.add('hidden'), 300);
    });

    const testimonialSlider = document.getElementById('testimonial-slider');
    const testimonialDots = document.getElementById('testimonial-dots');
    
    testimonialSlider.innerHTML = testimonials.map(item => `
        <div class="w-full flex-shrink-0 px-4">
            <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl space-y-6 text-center">
                <div class="flex justify-center space-x-1 text-amber-400 text-lg">
                    ${'<i class="fas fa-star"></i>'.repeat(item.rating)}
                </div>
                <p class="text-slate-600 dark:text-slate-300 italic text-sm md:text-base leading-relaxed">"${item.comment}"</p>
                <div class="flex items-center justify-center space-x-4">
                    <img src="${item.avatar}" alt="${item.name}" class="w-12 h-12 rounded-full object-cover border-2 border-primary">
                    <div class="text-left">
                        <h4 class="font-bold text-sm">${item.name}</h4>
                        <p class="text-xs text-slate-400">${item.role}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    testimonialDots.innerHTML = testimonials.map((_, i) => `
        <button class="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 transition-all dot-btn" data-index="${i}"></button>
    `).join('');

    let currentSlide = 0;
    const dots = document.querySelectorAll('.dot-btn');

    function updateCarousel(index) {
        currentSlide = index;
        testimonialSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, i) => {
            dot.className = i === currentSlide 
                ? 'w-8 h-3 rounded-full bg-primary transition-all' 
                : 'w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 transition-all';
        });
    }
    updateCarousel(0);

    dots.forEach(dot => {
        dot.addEventListener('click', () => updateCarousel(parseInt(dot.dataset.index)));
    });

    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonials.length;
        updateCarousel(currentSlide);
    }, 5000);

    const faqContainer = document.getElementById('faq-container');
    faqContainer.innerHTML = faqs.map((faq, i) => `
        <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm fade-in">
            <button class="w-full p-6 text-left font-bold flex justify-between items-center text-sm md:text-base faq-btn">
                <span>${faq.question}</span>
                <i class="fas fa-chevron-down text-primary transition-transform duration-300"></i>
            </button>
            <div class="faq-answer px-6 pb-6 text-slate-500 dark:text-slate-400 text-sm">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.faq-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const icon = btn.querySelector('i');
            const isOpen = answer.style.maxHeight;

            document.querySelectorAll('.faq-answer').forEach(el => el.style.maxHeight = null);
            document.querySelectorAll('.faq-btn i').forEach(el => el.style.transform = 'rotate(0deg)');

            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    function observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }
    observeElements();

    let counterTriggered = false;
    const statsContainer = document.getElementById('stats-container');

    window.addEventListener('scroll', () => {
        if (!statsContainer) return;
        const rect = statsContainer.getBoundingClientRect();
        if (rect.top <= window.innerHeight && !counterTriggered) {
            counterTriggered = true;
            document.querySelectorAll('.counter').forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const speed = 200;
                const updateCount = () => {
                    const count = +counter.innerText;
                    const inc = target / speed;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        }
    });

    const navbar = document.getElementById('navbar');
    const progressBar = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";

        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }

        if (window.scrollY > 300) {
            backToTop.classList.remove('opacity-0', 'pointer-events-none');
            backToTop.classList.add('opacity-100');
        } else {
            backToTop.classList.add('opacity-0', 'pointer-events-none');
            backToTop.classList.remove('opacity-100');
        }

        const heroBg = document.getElementById('hero-bg');
        if (heroBg) {
            heroBg.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`;
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    function setupDarkMode(buttonId) {
        const btn = document.getElementById(buttonId);
        if (!btn) return;
        btn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
    setupDarkMode('dark-mode-toggle');
    setupDarkMode('dark-mode-toggle-mobile');

    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });

    const cursorGlow = document.getElementById('cursor-glow');
    window.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Thank you! Your message has been sent.');
        e.target.reset();
    });

    document.getElementById('newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Subscribed to newsletter successfully!');
        e.target.reset();
    });
});

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'glass-effect bg-slate-900/90 text-white px-6 py-4 rounded-2xl border border-white/20 shadow-2xl flex items-center space-x-3 transform translate-y-10 opacity-0 transition-all duration-300';
    toast.innerHTML = `
        <i class="fas fa-check-circle text-accent text-lg"></i>
        <span class="text-sm font-semibold">${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
    }, 10);

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-10');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}