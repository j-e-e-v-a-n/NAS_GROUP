// Gallery data
const artworks = [
    {
        title: "Ocean Waves Clock",
        image: "images/cover/clock.jpg",
        category: "Resin Clock",
        link: "pages/clock.html"
    },
    {
        title: "Abstract Mural",
        image: "images/cover/(3).jpg",
        category: "Live Edge Mirror",
        link: "pages/liveedgemirror.html"
    },
    {
        title: "Nature Inspired",
        image: "images/cover/mold (2).jpg",
        category: "Wedding Preserved",
        link: "pages/weddingpreserved.html"
    },
    {
        title: "Galaxy Pour",
        image: "images/cover/mural and art (6).jpg",
        category: "Mrunal Arts",
        link: "pages/art.html"
    },
    {
        title: "Nature Inspired",
        image: "images/cover/nameboard (4).jpg",
        category: "Name Board",
        link: "pages/nameboard.html"
    },
    {
        title: "Nature Inspired",
        image: "images/cover/table and dining (1).jpg",
        category: "Table And Dining",
        link: "pages/table and dining.html"
    }
];

document.addEventListener('DOMContentLoaded', () => {
   // Populate gallery
    const gallery = document.getElementById('gallery-grid');
    
    artworks.forEach((artwork, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.2}s`;
        
        galleryItem.innerHTML = `
            <a href="${artwork.link}" class="gallery-link">
                <img src="${artwork.image}" alt="${artwork.title}">
                 </a>
                <div class="gallery-item-content">
                    <h3>${artwork.title}</h3>
                    <p>${artwork.category}</p>
                </div>
           
        `;
        
        gallery.appendChild(galleryItem);
    });

   // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

   // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
               // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

   // Add intersection observer for animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

   // Observe all animated elements
    document.querySelectorAll('.animate-float').forEach(element => {
        observer.observe(element);
    });
});