const menu = document.getElementById('nav-toggle')
const nav = document.getElementById('nav')
const headerTitle = document.getElementById('header__title')
const headerArrow = document.getElementById('header__arrow')
const hamburger = document.getElementById('hamburger')
const menuItems = document.querySelectorAll('.menu-item')

let isMenuOpen = false;

function handleMenuClick() {
    // hide these elements while the menu is open
    nav.classList.toggle('hide')
    headerTitle.classList.toggle('hide')
    headerArrow.classList.toggle('hide')
    // toggle isMenuOpen to true
    isMenuOpen = !isMenuOpen;
    // adjust the height of the hamburger
    isMenuOpen === false ? hamburger.style.height = '2px' : hamburger.style.height = '1px';
}

// event listeners 
// for opening and showing menu
menu.addEventListener('click', handleMenuClick)

// for hiding the menu after an option was selected
menuItems.forEach(el => el.addEventListener('click', handleMenuClick))

// on load
nav.classList.add('hide')