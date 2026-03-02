const projects = [
    { id: 1, title: "Golden Hour Wedding", category: "wedding", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Urban Portrait", category: "portrait", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Summer Music Fest", category: "event", img: "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Minimal Engagement", category: "wedding", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "Executive Profile", category: "portrait", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Night Skyline", category: "event", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800" },
    { id: 7, title: "Forest Elopement", category: "wedding", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800" },
    { id: 8, title: "Street Soul", category: "portrait", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" },
    { id: 9, title: "Coastal Vows", category: "wedding", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800" },
    { id: 10, title: "Artistic Shadows", category: "portrait", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800" },
    { id: 11, title: "Neon City Life", category: "event", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800" },
    { id: 12, title: "Timeless Church", category: "wedding", img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800" },
];

const team = [
    { name: "Vishesh Pisal", role: "Founding Photographer & creative Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Harsh Kadam", role: "Co-Founder", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
    { name: "Sarthak Gholap", role: "Cinematography Head", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400" },
    { name: "Vedant Jagtap", role: "Primary Editor", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
    { name: "Shreyas Kadam", role: "Visual Artist", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" },
    { name: "Yash Patil", role: "Technical Lead", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400" }
];

const galleryContainer = document.getElementById('gallery');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderGallery(filter = 'all') {
    if (!galleryContainer) return;

    // Add transition effect
    galleryContainer.style.opacity = '0';

    setTimeout(() => {
        galleryContainer.innerHTML = '';
        const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
        filtered.forEach((project, index) => {
            const item = document.createElement('div');
            item.className = 'portfolio-item animate-in';
            item.style.setProperty('--delay', (index % 4) + 1);
            item.innerHTML = `
                <img src="${project.img}" alt="${project.title}">
                <div class="portfolio-overlay">
                    <h4 class="mb-1 font-serif italic">${project.title}</h4>
                    <p class="text-accent small text-uppercase letter-spacing-1 mb-0">${project.category}</p>
                </div>
            `;
            galleryContainer.appendChild(item);
        });

        galleryContainer.style.opacity = '1';
        initObserver();
    }, 300);
}

// Navigation scroll effect
const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

if (filterBtns) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.dataset.filter);
        });
    });
}

function initObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                // Optional: stop observing once shown
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
}

// Interactive Cursor Blur
const cursorBlur = document.createElement('div');
cursorBlur.className = 'cursor-blur';
document.body.appendChild(cursorBlur);

const isMobile = window.matchMedia("(max-width: 991px)").matches || ('ontouchstart' in window);

if (!isMobile) {
    document.addEventListener('mousemove', (e) => {
        cursorBlur.style.left = e.clientX + 'px';
        cursorBlur.style.top = e.clientY + 'px';
    });
} else {
    cursorBlur.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    initObserver();
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! Our team will contact you shortly.');
        contactForm.reset();
    });
}

// Search Functionality
const searchableData = [
    ...projects.map(p => ({ title: p.title, type: 'Project', url: `project-${p.id}.html` })),
    { title: 'Weddings', type: 'Service', url: 'weddings.html' },
    { title: 'Portraits', type: 'Service', url: 'portraits.html' },
    { title: 'Events', type: 'Service', url: 'events.html' },
    { title: 'Corporate Stories', type: 'Service', url: 'corporate.html' },
    { title: 'Commercial Vibe', type: 'Service', url: 'commercial.html' }
];

const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.querySelector('.close-search');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchBtn && searchOverlay && searchInput) {
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        searchInput.focus();
    });
}

if (closeSearch && searchOverlay) {
    closeSearch.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });
}

if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        searchResults.innerHTML = '';
        if (query.length < 2) return;

        const matches = searchableData.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.type.toLowerCase().includes(query)
        );

        matches.forEach((match, index) => {
            const div = document.createElement('div');
            div.className = 'search-result-item animate-in fade-in-visible';
            div.style.transitionDelay = `${index * 50}ms`;
            div.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="text-white mb-0">${match.title}</h5>
                        <p class="text-accent small mb-0">${match.type}</p>
                    </div>
                    <i class="bi bi-arrow-right text-muted"></i>
                </div>
            `;
            div.onclick = () => window.location.href = match.url;
            searchResults.appendChild(div);
        });
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay) searchOverlay.classList.remove('active');
});
