const open_menu=document.querySelector('.open-menu');
const close_menu=document.querySelector('.close-icon');
const navbar=document.querySelector('.list');

open_menu.addEventListener('click',()=>{
   navbar.classList.add('active')
})
close_menu.addEventListener('click',()=>{
    navbar.classList.remove('active')
 })