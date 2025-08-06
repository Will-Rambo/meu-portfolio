
    function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }   else {
            el.classList.remove('active');
            }
        });
    }   

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);



    const text = "Bem vindo(a) ao meu Portfólio";
    let i = 0;
    const speed = 80;
    const typingEl = document.getElementById("typing-text");

    function typeWriter() {
        if (i < text.length) {
        typingEl.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        }
    }

    window.addEventListener('load', typeWriter);



    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
        e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
        });
    });
