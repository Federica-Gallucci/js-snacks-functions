/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter = "A";

// Dichiara la funzione qui.

// function nameList(nameList, initialLetter) {
//   const filterName = [];
//   for (let i = 0; i < nameList.length; i++) {
//     let currentName = nameList[i];
//     if (currentName[0] === initialLetter) {
//       filterName.push(currentName);
//     }
//   }

//   return filterName;
// }

// **ARROW FUNCTION

const nameList = (nameList, initialLetter) => {
  const filterName = [];
  for (let i = 0; i < nameList.length; i++) {
    let currentName = nameList[i];
    if (currentName[0] === initialLetter) {
      filterName.push(currentName);
    }
  }

  return filterName;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(nameList(names, letter));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
