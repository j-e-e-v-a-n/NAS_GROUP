// Get the hamburger icon, close icon, and the nav links container
const hamburger = document.getElementById('hamburger');
const close = document.querySelector('.close');
const navLinks = document.getElementById('nav-links');

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggles the 'active' class to show or hide the menu
});

// Close the menu when the close icon is clicked
close.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Removes the 'active' class to hide the menu
});

// Close the menu when clicking anywhere outside the menu or hamburger icon
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target) && !close.contains(event.target)) {
        navLinks.classList.remove('active'); // Close the menu if clicked outside
    }
});
