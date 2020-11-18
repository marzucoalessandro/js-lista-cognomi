//Lista Cognomi
//Chiedere all’utente il cognome
//inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
//stampa la lista ordinata alfabeticamente
//scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
//Consigli del giorno:
//1. consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.

//per prima cosa impostiamo il ragionamento.

//1 creiamo un array con i nostri Cognomi

//2 chiediamo tramite un prompt il cognome al nuovo arrivato.

//3 con il comando push inseriamo il nuovo cognome nella lista array

//3 impostiamo un ciclo for: chiediamo di ordinare per lettera la stampa  dell'array.

var lista = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

//verifichiamo l'array in console
console.log(lista);

var domanda = prompt("quale è il tuo cognome?");
//verifichiamo la var nella console
console.log(domanda);

lista.push(domanda);
lista.sort();
console.log(lista);



for (var i = 0; i < lista.length; i++) {
  //verifichiamo che il nuovo cognome sia nella lista
  console.log(lista[i]);


}
