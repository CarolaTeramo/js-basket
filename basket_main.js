function genera_random(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}

var alfabeto = "ABCDEFGHILMNOPQRSTUVZ";
var numeri = "1234567890";

function lettere_random(max1, max2) {
  prova = '';
  for (var i = 0; i < 3; i++) {
    prova += alfabeto.charAt(Math.floor(Math.random() * max1));
  }
  for (var j = 0; j < 3; j++) {
    prova += numeri.charAt(Math.floor(Math.random() * max2));
  }
  return prova
}

codici = [];

for (var k = 0; k < 5; k++) {
  codice = lettere_random (21,10);
  codici.push(codice);
  console.log(codici);
}

for (var i = 0; i < 5; i++) {

}

var valori = [];
for (var i = 0; i < 5; i++) {
  valore = {
    "punti": genera_random (0, 10),
    "rimbalzi": genera_random (0, 10),
    "falli": genera_random (0, 10),
    "tiri2": genera_random (0, 10),
    "tiri3": genera_random (0, 10),
  };
  valori.push(valore);
  console.log(valori);
}
