// Consegna:
// Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
//Milestone 1: Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello. Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
//Milestone 2: Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
let videogamesArray = [
    {
        img: '01.webp',
        title: 'Spiderman',
        descrition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum harum numquam?',
    },
    {
        img: '02.webp',
        title: 'Ratchet & Clank',
        descrition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum harum numquam?',
    },
    {
        img: '03.webp',
        title: 'Fortnite',
        descrition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum harum numquam?',
    },
    {
        img: '04.webp',
        title: 'Stray',
        descrition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum harum numquam?',
    },
    {
        img: '05.webp',
        title: 'Avengers',
        descrition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum harum numquam?',
    }
]

const image = document.querySelector('.image-left');
const thumbnails = document.querySelector('.thumbnails');

videogamesArray.forEach((elem) => {
    image.innerHTML += `<div class="item"><img src="./img/${elem.img}" alt="${elem.img}"><div class="descrition"><h2>${elem.title}</h2><p>${elem.descrition}</p></div></div>`
    thumbnails.innerHTML += `<div class="image-thum"><img src="./img/${elem.img}" alt="${elem.img}"></div>`
});


const active = document.getElementsByClassName('item');
let itemsActive = 0;
active[itemsActive].classList.add('active');

const down = document.getElementById('down')
const up = document.getElementById('up');

let playAuto = setInterval(autoplay, 3000);

down.addEventListener('click', autoplay)

up.addEventListener('click', function(){
    active[itemsActive].classList.remove('active');
    active[itemsActive].classList.remove('active');
    if(itemsActive == 0){
        itemsActive = 4;
    }
    else{
        itemsActive--;
    }
    active[itemsActive].classList.add('active');
    active[itemsActive].classList.add('active');
})

function autoplay(){
    active[itemsActive].classList.remove('active');
    active[itemsActive].classList.remove('active');
    if(itemsActive == 4){
        itemsActive = 0;
    }
    else{
        itemsActive++;
    }
    active[itemsActive].classList.add('active');
    active[itemsActive].classList.add('active');
}