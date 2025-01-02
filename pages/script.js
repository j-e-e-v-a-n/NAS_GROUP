// Lightbox Functionality
const images = document.querySelectorAll('.art-piece img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-lightbox');

// When an image is clicked, show it in the lightbox
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;  // Set the src of the lightbox image to the clicked image
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close the lightbox if the user clicks outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});


// Get the hamburger icon, close icon, and the nav links container
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggles the 'active' class to show or hide the menu
});

// Close the menu when clicking anywhere outside the menu or hamburger icon
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('active'); // Close the menu if clicked outside
    }
});
