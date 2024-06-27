document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const menuLinks = document.querySelector('.menu-links');
    const homeLink = document.querySelector('.menu-links li:nth-child(1) a'); // Target the first link

    menuBtn.addEventListener('click', () => {
        menuLinks.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        menuLinks.style.display = 'none';
    });

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();

        const allLinks = document.querySelectorAll('.navbar a');
        allLinks.forEach(link => link.classList.remove('active'));

        homeLink.classList.add('active');
    });
});
