var agora = new Date();
var hora = agora.getHours();
var agora = new Date();
var minutos = agora.getMinutes();

console.log(`|Agora são exatamente ${hora} horas e ${minutos} minutos.`);
if (hora < 12) {
  console.log(`Bom Dia!`);
} else if (hora <= 18) {
  console.log(`Boa Tarde !`);
} else {
  console.log(`Boa Noite !`);
}
