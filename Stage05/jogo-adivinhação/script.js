/*
  const h1 = document.querySelector('h1') //HTMLElement
  // Pegando vários elementos
  const links = document.querySelectorAll('a') // NodeList

  // innerText
  console.log(h1.innerText)
  // innerHTML
  console.log(h1.innerHTML)
  // alterando o texto (ou o HTML)
  h1.innerText = "Novo título"

  // alterando o estilo
  h1.style.backgroundColor = "red"
  // adicionando classes
  h1.classList.add('hide')
  // removendo classes
  h1.classList.remove('hide')
  // alternando entre classes
  h1.classList.toggle('hide')


  //EVENTOS!!
  const button = document.querySelector('button')
  // vamos registrar o evento na nossa aplicação
  button.addEventListener('click', function(e) {
  console.log(e) // objeto contendo tudo sobre o evento
  document.querySelector('p').style.display = "block"
  })
  // addEventListener recebe 2 argumentos
  // O primeiro é uma string com nome do evento
  // Depois, uma função callback
  // que irá executar um código em reação ao event

*/

//VARIÁVEIS
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector('#btnTry'); //pegando o botão conforme seu seletor.
const btnReset = document.querySelector('#btnReset'); //pegando o botão conforme seu seletor.

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;



//EVENTOS
btnTry.addEventListener('click', handleTryClick); //quando ocorrer o evento 'click' no btnTry execute a função handleTryClick.
btnReset.addEventListener('click', handleResetClick); //quando ocorrer o evento 'click' no btnReset execute a função handleResetClick.
document.addEventListener('keypress', handleEnter);//quando ocorrer o evento 'enter' execute a função handleResetClick.


// btnReset.addEventListener('click', function() { //esse jeito de executar a função só é uma forma diferente sem noemá-la(o jeito mais comum está a cima)
//   screen1.classList.remove("hide");//Está pegando o selector .screen1 e adicionando onde ele estiver a class 'hide'.
//   screen2.classList.add("hide");//Está pegando o selector .screen1 e adicionando onde ele estiver a class 'hide'.

//   randomNumber = Math.round(Math.random() * 10);//trocar número randômico.
//   xAttempts = 1; //resetar as tentativas para 1.
// });




//FUNÇÕES CALLBACK
function handleTryClick(event){
  event.preventDefault();//não faça o padrão desse evento(prevenir do padrão), que seria enviar o formulário(por isso foi usado para a página não carregar) por ser um botão dentro do formulário.

  const inputNumber = document.querySelector("#inputNumber");//aqui está sendo pego o seletor CSS, por isso é colocado também a '#' antes do ID posto no HTML.

  if(Number(inputNumber.value) == randomNumber){//comparando o valor(.value) com o número randômico.
    // screen1.classList.add("hide");//Está pegando o selector .screen1 e adicionando onde ele estiver a class 'hide'.
    // screen2.classList.remove("hide");//Está pegando o selector .screen1 e adicionando onde ele estiver a class 'hide'.

    toggleScreen(); //ao invés de usar o add ou remove, usar apenas o toggle para se não tiver o hide colocar e se tiver tirar.


    //document.querySelector(".screen2 h2").innerText = `Você acertou em  ${xAttempts} tentativas`; //Selecionando o h2 que está junto com a classe .screen2 e ajustando o texto desse h2 para o informado.
    screen2.querySelector("h2").innerText = `Você acertou em  ${xAttempts} tentativas`; //outra forma de fazer a linha de cima(isso pq a variável screen2 possui o document da classe .screen2, assim o JS puxa o H2 que esteja dentro de screen2).

  }

  //console.log(inputNumber.value); //.value para puxar o valor digitado dentro do input.
  if(Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10 && (inputNumber.value !== '')){
    xAttempts++;
  }else{
    alert('Escolha um número entre 0 e 10');
  }//Se não for um caracter entre 0 e 10 não entra nas tentativas e aparece um alerta.
  inputNumber.value = null; //ao querer tentar novamente já reseta o valor dentro de input para null;

}

function handleResetClick(){
  // screen1.classList.remove("hide");//Está pegando o selector .screen1 e adicionando onde ele estiver a class 'hide'.
  // screen2.classList.add("hide");//Está pegando o selector .screen1 e adicionando onde ele estiver a class 'hide'.
  toggleScreen(); //ao invés de usar o add ou remove, usar apenas o toggle para se não tiver o hide colocar e se tiver tirar.

  randomNumber = Math.round(Math.random() * 10);//trocar número randômico.
  xAttempts = 1; //resetar as tentativas para 1.
}

function toggleScreen(){
  screen1.classList.toggle("hide");//se não tiver adiciona a class hide e se tiver tira.
  screen2.classList.toggle("hide");
}

function handleEnter(e){ ////quando ocorrer o evento 'enter' execute a função handleResetClick.
  if(e.key == 'Enter' && screen1.classList.contains("hide")){
    handleResetClick();
  }
}


