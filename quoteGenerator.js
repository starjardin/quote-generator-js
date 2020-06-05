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

let randomNumber1 = Math.floor(Math.random() * firstSentece.length);
let randomElement = firstSentece[randomNumber1];
console.log(randomElement);

let randomNumber2 = Math.floor(Math.random() * secondSentence.length);
let randomElement2 = secondSentence[randomNumber2];
console.log(randomElement2);
console.log(randomElement, randomElement2);

let randomNumber3 