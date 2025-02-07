let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let close = document.querySelector('.close');
let links = document.querySelectorAll('li');

menu.onclick = () => {
    navbar.classList.toggle('active');
    close.classList.toggle('active');   
}

links.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
        close.classList.remove('active');
    };
});    
