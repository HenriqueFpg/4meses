var content = 'Bom dia vida, dormiu bem?? Hoje estamos completando 4 meses de namoro, e tipo, estou demorando um pouco pra me acostumar com a idéia. 4 meses equivalem a 122 dias... 122 dias que a gente passou se falando, sem pular nenhum. E tipo, você nesses 122 dias mostrou ser a mulher mais maravilhosa que eu podia ter ao meu lado.';
var content2 = 'Foi algo realmente surpreendente, porque eu sinto que você tem um espaço tão grande e insubstituível na minha vida, e ao mesmo tempo se tornou tão próxima e íntima em tão pouco tempo que eu não consigo imaginar 1 minuto da minha vida sem você, sem parecer que eu perdi as duas pernas de repente.';
var content3 = 'Se um dia alguém apontar a arma para a minha cabeça e disser \"Irmão, explique o seu amor pela Eliza.\" eu vou dizer algo sobre todas as vezes que seu sorriso mudou meu dia totalmente para melhor, como seus olhos me acalmam, como você me da segurança e como eu penso em você todos os segundos do meu dia. Espero que ele';
var content3_5 = ' não atire.';
var content4 = 'Mas não são só essas coisas que fazem eu te amar, eu só vou estar em choque na hora e querer responder um pouco mais com calma, aliás, é uma arma e ela atira (?). Por sorte, agora eu não estou sob ameaça hehe. Eliza, eu te amo, de um jeito que eu nunca achei que fosse conseguir amar alguém, porquê você é você. ';
var content4_5 = 'Seus olhos, o jeito que as vezes você me encara quando não estou olhando diretamente para você, eles têm um brilho tão perfeito, principalmente quando você está de óculos, que me fazem ter, no tempo que passamos juntos, toda a paz deste mundo.';
var content5 = 'Eliza, muito obrigado por tudo o que você fez por mim e por nós, muito obrigado por fazer eu me sentir o homem mais amado do mundo, e consequentemente, o mais feliz. Eu quero de toda a minha alma passar toda a minha vida com você, dizer todos os dias que te amo e te abraçar forte sem querer soltar, para que eu tenha ';
var content5_5 = 'certeza que tudo isso não é um sonho.';

var text = document.getElementById('texto');
var text2 = document.getElementById('texto2');
var text3 = document.getElementById('texto3');
var text4 = document.getElementById('texto4');
var text5 = document.getElementById('texto5');

var speed = 1;
var cont = 0;

function typeWriter () {
  if(cont < content.length){
    text.textContent += content.charAt(cont);
    cont++;
    setTimeout(typeWriter, speed);
  }
  else{
    cont=0;
    typeWriter2();
  }
}
function typeWriter2 () {

  if(cont < content.length){
    text2.textContent += content2.charAt(cont);
    cont++;
    setTimeout(typeWriter2, speed);
  }
  else{
    cont=0;
    typeWriter3();
  }
}
function typeWriter3 () {

  if(cont < content.length){
    text3.textContent += content3.charAt(cont);
    cont++;
    setTimeout(typeWriter3, speed);
  }
  else{
    cont=0;
    typeWriter3_5();
  }
}
function typeWriter3_5 () {

  if(cont < content.length){
    text3.textContent += content3_5.charAt(cont);
    cont++;
    setTimeout(typeWriter3_5, speed);
  }
  else{
    cont=0;
    typeWriter4();
  }
}
function typeWriter4 () {

  if(cont < content.length){
    text4.textContent += content4.charAt(cont);
    cont++;
    setTimeout(typeWriter4, speed);
  }
  else{
    cont=0;
    typeWriter4_5();
  }
}
function typeWriter4_5 () {

  if(cont < content.length){
    text4.textContent += content4_5.charAt(cont);
    cont++;
    setTimeout(typeWriter4_5, speed);
  }
  else{
    cont=0;
    typeWriter5();
  }
}
function typeWriter5 () {

  if(cont < content.length){
    text5.textContent += content5.charAt(cont);
    cont++;
    setTimeout(typeWriter5, speed);
  }
  else{
    cont=0;
    typeWriter5_5();
  }
}
function typeWriter5_5 () {

  if(cont < content.length){
    text5.textContent += content5_5.charAt(cont);
    cont++;
    setTimeout(typeWriter5_5, speed);
  }
}
typeWriter();
