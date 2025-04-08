/* Scrivi una funzione che accetti una stringa contenente un nome 
e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.

function helloName(name) {
  const helloUser = "Ciao " + name;
  return helloUser;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(helloName(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
