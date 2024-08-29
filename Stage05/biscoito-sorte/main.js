//VARIABLES
const openCookie = document.querySelector('#openCookie');
const btnOpenNewCookie = document.querySelector('#btnOpenNewCookie');
const home = document.querySelector('.home');
const luck = document.querySelector('.luck');


//EVENTS
openCookie.addEventListener('click', toggleScreen); //ao clicar no link com id openCookie rode a função toogleScreen que tira caso tenha ou coloca a classe hide caso não tenha.
btnOpenNewCookie.addEventListener('click', toggleScreen);

//FUNCTIONS
function toggleScreen(){
  home.classList.toggle("hide");//se não tiver adiciona a class hide e se tiver tira.
  luck.classList.toggle("hide");
}

