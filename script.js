// Lazy loading images using IntersectionObserver API
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img.lazy-load');

    const loadImage = (image) => {
        image.src = image.getAttribute('data-src');
        image.onload = () => image.classList.add('loaded');
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    images.forEach(image => observer.observe(image));
});
