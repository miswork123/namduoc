let menuIcon = document.querySelector('.sup-menu');
let menuMobile = document.querySelector('.header-list-menu');
    
menuIcon.addEventListener('click', function() {
    this.classList.toggle('active');
    menuMobile.classList.toggle('show');
  
});

let headerSearch = document.querySelector('.tim-kiem');
let searchGoogle = document.querySelector('.search--google');

headerSearch.addEventListener('click', function()
{
    searchGoogle.classList.toggle('open');
    
}); 

var myString = 'Le cao nguyen'
console.log(myString.length)
console.log(myString.indexOf('caoa'))
console.log(myString.replace('cao', 'Phong'))
console.log(myString.toUpperCase())
console.log(myString.toLowerCase())
console.log(myString.split(' '))