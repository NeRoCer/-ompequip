var menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'rgba(175, 210, 117, 0.5)';
    });

    link.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
});