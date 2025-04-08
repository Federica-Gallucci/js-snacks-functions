/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function arrayNames(namesList) {
  const initialsNames = [];
  for (let i = 0; i < namesList.length; i++) {
    let currentName = namesList[i];
    initialsNames.push(currentName[0]);
  }
  return initialsNames;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(arrayNames(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
