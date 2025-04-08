/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nameUser = "Mario";

// Dichiara la funzione qui.

// function greetUser(user) {
//   let helloUser = "";
//data odiera
//   const today = new Date();
//ora corrente
//   let currentHours = today.getHours();
//se l'ora corrente è minore delle 13
//   if (currentHours < 13) {
//     helloUser = "buongiorno";
//altrimenti se l'ora corrente è maggiore delle 17
//   } else if (currentHours > 17) {
//     helloUser = "buonasera";
//altrimenti se l'ora corrente è compresa tra le 13 e le 15
//   } else {
//     helloUser = "buon pomeriggio";
//   }
//   return `${helloUser}  ${user}`;
// }

// **ARROW FUNCTION

const greetUser = (user) => {
  let helloUser = "";
  //data odiera
  const today = new Date();
  //ora corrente
  let currentHours = today.getHours();
  //se l'ora corrente è minore delle 13
  if (currentHours < 13) {
    helloUser = "buongiorno";
    //altrimenti se l'ora corrente è maggiore delle 17
  } else if (currentHours > 17) {
    helloUser = "buonasera";
    //altrimenti se l'ora corrente è compresa tra le 13 e le 15
  } else {
    helloUser = "buon pomeriggio";
  }
  return `${helloUser}  ${user}`;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(greetUser(nameUser));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
