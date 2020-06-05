//Create an array for the first pieces of sentence
let firstSentece = [
  'Hello world', 'hi there', 'Good morning'
]
//Create an array for the second pieces of sentence
let secondSentence = [
  'I am good', 'And you', 'I am doing ok'
]
// Create an array for the third peices of sentence
let lastSentence = [
  'Wow!!', 'Good bye', 'See you'
]
// Call the peices of sentences radomly
let randomNumber1 = Math.floor(Math.random() * firstSentece.length);
let randomElement = firstSentece[randomNumber1];

let randomNumber2 = Math.floor(Math.random() * secondSentence.length);
let randomElement2 = secondSentence[randomNumber2];

let randomNumber3 = Math.floor(Math.random() * lastSentence.length);
let randomElement3 = lastSentence[randomNumber3];

//This is the full quoteation

let fullQuote = (randomElement + randomElement2 + randomElement3)
console.log(`'${fullQuote}'`);
// Chose the number of quotes generated, we use peompt for that.
let number = prompt('Enter a number between 1 to 5 here');

// for (let i = 0; i < 5; i++) {
//   switch(randomNumber1) {
//     case "1":
//       let value1 = firstSentece[0]
//       alert(value1);
//       break;
//     case "2":
//       let value2 = firstSentece[1];
//       alert(value2)  
//   }
// }