// Il software deve generare casualmente le statistiche di gioco di
// 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti
// informazioni, facendo attenzione che il numero generato abbia
// senso:
// - Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per tiri da 3 punti



var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var player_codes = [];

// creo una funcione per generare un Giocatore
function generate_player() {

  var player_code = '';
  do {
    player_code = '';
    // genero 3 lettere e le concateno al codice del giocatore
    for (var i = 0; i < 3; i++) {
      var char_position = number_generator(0,25);
      var char = characters.charAt(char_position);
      player_code += char;
    }
    // genero 3 cifre e le concateno al codice del giocatore
    for (var i = 0; i < 3; i++) {
      player_code += number_generator(0,9);
    }
  } while(player_codes.includes(player_code));

  player_codes.push(player_code);

  // genero numero di punti, rimbalzi e Falli
  var punti = number_generator(0, 40);
  var rimbalzi = number_generator(0,200);
  var falli = number_generator(0,5);

  // genero le percentuali per i tiri da 2 e 3 punti
  var perc_2 = (number_generator(0,1000) / 10).toFixed(1);
  var perc_3 = (100 - perc_2).toFixed(1);

  // costruisco un oggetto giocatore
  var player = {
    'codice': player_code,
    'punti': punti,
    'rimbalzi': rimbalzi,
    'falli': falli,
    'perc_2': perc_2,
    'perc_3': perc_3
  }

  return player;
}

var players = [];
// genero 100 oggetti giocatore
for (var i = 0; i < 100; i++) {
  var player = generate_player();
  players.push(player);
}

// aggiungo alla lista giocatori in a con indice per ciascun giocatore

var template_html = $('#entry-template').html();
var template_function = Handlebars.compile(template_html);


for (var i = 0; i < players.length; i++) {

  var variabili = {
    'codice': player_codes[i],
    'attributo': i
  };
  //console.log(variabili);
  // metto questo oggetto dentro la funzione
  //che è nel var template_function
  var html_finale = template_function(variabili);
  // appendo questo var all id che è nell'html
  $('#player_list').append(html_finale)


  // // creo li  con classe giocatore
  // var item = '<li class="giocatore">';
  // console.log(item);
  // //  all' li do aggiungo un a con indice
  // item += '<a href="#" data-indice="' + i + '">' + players[i].codice + '</a>';
  // item += '</li>';
  // console.log(item);
  // // appendo (inserisco)ogni  li nel div con classe player_list
  // $('#player_list').append(item);
  // console.log(item);
}

var template_html = $('#prova').html();
var template_function = Handlebars.compile(template_html);

// reagisco al cambio di selezione del giocatore
$('#player_list .giocatore').click(function() {

  $('#player_statistics').html('');
  // con attr recupero l'indice (=attr di a)del giocatore su cui ho cliccato
  // e lo chiamo giocatore selezionato == indice
  var selected_player = $(this).children('a').attr('data-mio');
  console.log(selected_player);

  var variabile2 = {
    'codice': players[selected_player].codice,
    'punti': players[selected_player].punti,
    'rimbalzi': players[selected_player].rimbalzi,
    'falli': players[selected_player].falli,
    'perc_2': players[selected_player].perc_2,
    'perc_3': players[selected_player].perc_3
  };

  console.log(variabile2);



  // console.log(players[selected_player]);
  // // console.log(players[selected_player]);
  //
  // // prendo l'attributo codice della lista players con indice selected_player
  // var selected_code = players[selected_player].codice;
  // // scrivo l'attributo codice nel div .player_code_container'
  // $('.player_code_container').text(selected_code);
  //
  // var selected_punti = players[selected_player].punti;
  // $('.punti h2 span').text(selected_punti);
  //
  // $('.rimbalzi h2 span').text(players[selected_player].rimbalzi);
  // $('.falli h2 span').text(players[selected_player].falli);
  // $('.tiri_2 h2 span').text(players[selected_player].perc_2);
  // $('.tiri_3 h2 span').text(players[selected_player].perc_3);


  var html_finale1 = template_function(variabile2);
  // appendo questo var all id che è nell'html
  $('#player_statistics').append(html_finale1);
// oppure e tolgo reset all'inizio $('#player_statistics').html(html_finale1);

  // mostra tutto il div statistiche
  $('#player_statistics').show();

});



// appendo questo var all id che è nell'html



function number_generator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


var source   = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
