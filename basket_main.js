function genera_random(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}

var alfabeto = "ABCDEFGHILMNOPQRSTUVZ";
var numeri = "1234567890"
//var lunghezza =
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
var codice = lettere_random (21,10);
console.log(codice);

//
// var punti = genera_random (0, 10);
// var rimbalzi = genera_random (0, 10);
// var falli = genera_random (0, 10);
// var tiri_2punti = genera_random (0, 10);
// var tiri_3punti = genera_random (0, 10);

// var generico = {
//   "p": punti,
//   "cognome": rimbalzi,
//   "eta": falli,
//   "eta": tiri_2punti,
//   "eta": tiri_3punti,
// };
