let menuIcon = document.querySelector('.sup-menu');
let menuMobile = document.querySelector('.header-list-menu');

menuIcon.addEventListener('click', function() {
    this.classList.toggle('active');
    menuMobile.classList.toggle('show');
  
});

