let menuIcon = document.querySelector('.sup-menu');
let menuMobile = document.querySelector('.header-list-menu');

menuIcon.addEventListener('click', function() {
    this.classList.toggle('active');
    menuMobile.classList.toggle('show');
  
});

let headerSearch = document.querySelector('.header__search');
let searchGoogle = document.querySelector('.search--google');

headerSearch.addEventListener('click', function()
{
    searchGoogle.classList.toggle('open');
    if(searchGoogle){
        console.log('dung');

    }else{
        console.log('sai')
    }
}); 