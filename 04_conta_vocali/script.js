/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

/**
 * Funzione che conta il numero di vocali
 * @param {string} phrase stringa in cui contare le vocali
 * @returns {number} numero di vocali
 */
// function countVowels(phrase) {
//   let vowelsNumber = 0;
//   for (let i = 0; i < phrase.length; i++) {
//     const currentChar = phrase[i].toLowerCase();
//     if (
//       currentChar === "a" ||
//       currentChar === "e" ||
//       currentChar === "i" ||
//       currentChar === "o" ||
//       currentChar === "u"
//     )
//       vowelsNumber += 1;
//   }
//   return vowelsNumber;
// }

// **ARROW FUNCTION

const countVowels = (phrase) => {
  let vowelsNumber = 0;
  for (let i = 0; i < phrase.length; i++) {
    const currentChar = phrase[i].toLowerCase();
    if (
      currentChar === "a" ||
      currentChar === "e" ||
      currentChar === "i" ||
      currentChar === "o" ||
      currentChar === "u"
    )
      vowelsNumber += 1;
  }
  return vowelsNumber;
};

// Invoca la funzione qui e stampa il risultato in console

const outputText = countVowels(word);
console.log(outputText);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
