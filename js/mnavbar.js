
document.addEventListener('DOMContentLoaded', () => {

    let mobileNavbar = document.querySelector('.mobile_navbar');
    let mobileNavbarButton = document.querySelector('#mobile_navbar_button');
    let mobileNavbarCloseButton = document.querySelector('#mobile_navbar_close_button');

    mobileNavbarButton.addEventListener('click', () => {
        mobileNavbar.style.display = 'block';
    });

    mobileNavbarCloseButton.addEventListener('click', () => {
        mobileNavbar.style.display = 'none';
    });

});