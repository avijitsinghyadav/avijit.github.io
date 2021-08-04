burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
right_nav = document.querySelector('.right_nav')
navList = document.querySelector('.nav-list')

burger.addEventListner('click',()=>{

    right_nav.classList.toggle(v-class-resp);
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})