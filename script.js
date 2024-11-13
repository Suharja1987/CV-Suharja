// Smooth scrolling saat sidebar link diklik
document.querySelectorAll('.sidebar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi Skill Bar bertahap
window.addEventListener('scroll', function() {
    const skillBars = document.querySelectorAll('.skill-level');
    const triggerBottom = window.innerHeight / 1.2;

    skillBars.forEach((bar, index) => {
        const skillTop = bar.getBoundingClientRect().top;

        if(skillTop < triggerBottom) {
            setTimeout(() => {
                bar.style.width = bar.getAttribute('data-level') + '%';
            }, index * 150);
        } else {
            bar.style.width = '0';
        }
    });
});
