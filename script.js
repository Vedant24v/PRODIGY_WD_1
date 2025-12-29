var name = "Vedant Vyawhare";
console.log("Developer: " + name);

// Simple scroll reveal effect
window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.item');
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});