// Define link elements
const aboutmeLink = document.querySelector('#aboutme-link');
const hobbyLink = document.querySelector('#hobby-link');

// Define text sections
const aboutme = document.querySelector('#about-me');
const hobbys = document.querySelector('#hobbys');

// About me link
aboutmeLink.addEventListener('click', () => {

    // Set active classes on nav links
    aboutmeLink.classList.add('active');
    hobbyLink.classList.remove('active');

    aboutme.classList.add('visible');
    hobbys.classList.remove('visible');
})

// Hobby link
hobbyLink.addEventListener('click', () => {

    // Set active classes on nav links
    aboutmeLink.classList.remove('active');
    hobbyLink.classList.add('active');

    aboutme.classList.remove('visible');
    hobbys.classList.add('visible');
})