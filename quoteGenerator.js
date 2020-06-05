//Create an array for the first pieces of sentence
let firstSentece = [
  'Hello world', 'hi there', 'Good morning', 'I am Will', 'I am Malgasy'
]
//Create an array for the second pieces of sentence
let secondSentence = [
  'I am good', 'And you', 'I am doing ok', 'Nice to meet you', 'Good to see you again'
]
// Create an array for the third peices of sentence
let lastSentence = [
  'Wow!!', 'Good bye', 'See you', 'catch you later', 'Good luck'
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
// console.log(`'${fullQuote}'`);
// Chose the number of quotes generated, we use peompt for that.
let number = prompt('Enter a number between 1 to 5 here');

if (number === "1") {
  let firsrQuote = (firstSentece[0] + secondSentence[0] + lastSentence[0]);
  console.log(firsrQuote)
}

if (number === "2") {
  let secondQuote = (firstSentece[1] +', ' + secondSentence[1] + ', ' + lastSentence[1]);
  console.log(secondQuote)
}

if (number === "3") {
  let thirdQuote = (firstSentece[2] +', ' + secondSentence[2] + ', ' + lastSentence[2]);
  console.log(thirdQuote)
}

if (number === "4") {
  let secondQuote = (firstSentece[3] +', ' + secondSentence[3] + ', ' + lastSentence[3]);
  console.log(secondQuote)
}

if (number === "5") {
  let secondQuote = (firstSentece[4] +', ' + secondSentence[4] + ', ' + lastSentence[4]);
  console.log(secondQuote)
}
