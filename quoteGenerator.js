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

let fullQuote = (randomElement + ' ' + randomElement2 + ' ' +  randomElement3)
console.log(`'${fullQuote}'`);
// Chose the number of quotes generated, we use peompt for that.
let number = prompt('Enter a number between 1 to 5 here');

// //Check if number is equal to one quotes equal to firstQoute
// if (number === "1") {
//   let firstQuote = (firstSentece[0] + ' ' + secondSentence[0] + ' ' + lastSentence[0]);
//   console.log(`'${firstQuote}'`);
// }

// //Check if number is equal to two quotes equal to secondtQoute
// if (number === "2") {
//   let secondQuote = (firstSentece[1] +', ' + secondSentence[1] + ', ' + lastSentence[1]);
//   console.log(`'${secondQuote}'`)
// }
// //Check if number is equal to three quotes equal to thirddtQoute

// if (number === "3") {
//   let thirdQuote = (firstSentece[2] +', ' + secondSentence[2] + ', ' + lastSentence[2]);
//   console.log(`'${thirdQuote}'`)
// }

// //Check if number is equal to four quotes equal to fourthQoute

// if (number === "4") {
//   let secondQuote = (firstSentece[3] +', ' + secondSentence[3] + ', ' + lastSentence[3]);
//   console.log(`'${secondQuote}'`)
// }

// //Check if number is equal to five quotes equal to fifhtQoute

// if (number === "5") {
//   let fithQuote = (firstSentece[4] +', ' + secondSentence[4] + ', ' + lastSentence[4]);
//   console.log(`'${fithQuote}'`)
// }

//Using switch methode

switch (number) {
  case "1":
    //Check the number is equal to one.
    let firstQuote = (firstSentece[4] +', ' + secondSentence[4] + ', ' + lastSentence[4]);
    console.log(firstQuote);
    break;
    //Check if the number is equal to two.
  case "2":
    let secondQuote = (firstSentece[4] +', ' + secondSentence[4] + ', ' + lastSentence[4]);
    console.log(secondQuote);
    break;
    //Check if the number is equal to three.
  case "3":
    let thirdQuote = (firstSentece[4] +', ' + secondSentence[4] + ', ' + lastSentence[4]);
    console.log(thirdQuote);
    break;
    //Check if the number is equal to four.
  case "4":
    let fourthQuote = (firstSentece[4] +', ' + secondSentence[4] + ', ' + lastSentence[4]);
    console.log(fourthQuote);
    break;
    //Check if the number is equal to five.
  case "5":
    let fithQuote = (firstSentece[4] +', ' + secondSentence[4] + ', ' + lastSentence[4]);
    console.log(fithQuote);
    break;
    //If the number is not between 0 and 6 This will throw an alert message.
  default:
    console.log(`'Wow not found please try again with a number less than 6'`);
}
