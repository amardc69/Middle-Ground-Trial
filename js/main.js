/* main.js */

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) {
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });

    const themeSelect = document.getElementById('theme-select');
    themeSelect.addEventListener('change', (e) => {
        document.body.className = e.target.value;
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    document.getElementById('get-started').addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
