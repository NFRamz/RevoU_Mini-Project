document.addEventListener('DOMContentLoaded', function() {

    const navMenuButtonForMobile = document.getElementById('navMenuButtonForMobile');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const defaultPage = 'home-page';


    const showPage = (pageId) => {
        pages.forEach(page => {
            page.style.display = page.id === pageId ? 'block' : 'none';
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const pageTarget = link.getAttribute('data-page');
            const anchorTarget = link.getAttribute('href');

            if (pageTarget) {
                e.preventDefault();
                showPage(pageTarget);
            }

            else if (anchorTarget && anchorTarget.startsWith('#')) {
                e.preventDefault();

                showPage(defaultPage);

                setTimeout(() => {
                    const targetElement = document.querySelector(anchorTarget);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }

            if (window.innerWidth <= 768) {
                navMenuButtonForMobile.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    showPage(defaultPage);

    if (navMenuButtonForMobile && navMenu) {
        navMenuButtonForMobile.addEventListener('click', () => {
            navMenuButtonForMobile.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    const userNameSpan = document.getElementById('user-name');
    if (userNameSpan) {
        const userName = prompt("Masukkan Namamu:", "Guest");
        userNameSpan.textContent = userName || "Guest";
    }



    const messageForm = document.getElementById('message-form');
    if (messageForm) {
        const setCurrentTime = () => {
            document.getElementById('current-time').textContent = new Date().toUTCString();
        };

        setCurrentTime();
        setInterval(setCurrentTime, 1000);

        messageForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const fullName = document.getElementById('full-name').value.trim();
            const birthDate = document.getElementById('birth-date').value;
            const gender = document.querySelector('input[name="gender"]:checked');
            const message = document.getElementById('message').value.trim();

            if (!fullName || !birthDate || !gender || !message) {
                alert("Please fill out all fields.");
                return;
            }

            document.getElementById('output-name').textContent = fullName;
            document.getElementById('output-birth-date').textContent = birthDate;
            document.getElementById('output-gender').textContent = gender.value;
            document.getElementById('output-message').textContent = message;

            messageForm.reset();
        });
    }

});

