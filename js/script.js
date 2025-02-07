let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let close = document.querySelector('.close');
let links = document.querySelectorAll('li'); //возвращает NodeList — коллекцию всех найденных элементов <li> в документе

menu.onclick = () => {
    navbar.classList.toggle('active');
    close.classList.toggle('active');   
}

// Добавляем обработчики для всех элементов списка один раз
//forEach — метод для перебора коллекции
links.forEach(link => {
    link.onclick = () => {            //link — это текущий элемент <li>
        navbar.classList.remove('active');
        close.classList.remove('active');
    };
});    

// border к textarea добавляется при вводе текста и остается если есть текст
// даже если поле не активно (убрала эффект)
// const textarea = document.querySelector('textarea');

// textarea.addEventListener('input', function() {
//     console.log('Ввод текста:', this.value); // Проверка ввода
//     if (this.value.trim() !== "") {
//         this.classList.add('has-text');
//     } else {
//         this.classList.remove('has-text');
//     }
// });
