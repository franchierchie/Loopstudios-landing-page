const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburger-close');

const navContainer = document.querySelector('.nav-container-header');
const headerContent = document.querySelector('.header-content');

const hamburgerMenu = () => {
    hamburger.classList.toggle('hidden');
    hamburgerClose.classList.toggle('hidden');

    header.classList.toggle('hamburger-nav-menu');
    main.classList.toggle('hidden');
    footer.classList.toggle('hidden');
    
    if (navContainer.style.display == 'block') {
        navContainer.style.display = 'none';
    } else {
        navContainer.style.display = 'block';
    }
    headerContent.classList.toggle('hidden');
}

hamburger.addEventListener('click', hamburgerMenu);
hamburgerClose.addEventListener('click', hamburgerMenu);