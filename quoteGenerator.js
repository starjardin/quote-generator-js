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

//Using switch methode

switch (number) {
  case "1":
    //Check the number is equal to one.
    let firstQuote = (firstSentece[4] +', ' + secondSentence[4] + ', ' + lastSentence[4]);
    console.log(`'${firstQuote}'`);
    break;
    //Check if the number is equal to two.
  case "2":
    let secondQuote = (firstSentece[4] +', ' + secondSentence[4] + ', ' + lastSentence[4]);
    console.log(`'${secondQuote}'`);
    break;
    //Check if the number is equal to three.
  case "3":
    let thirdQuote = (firstSentece[4] +', ' + secondSentence[4] + ', ' + lastSentence[4]);
    console.log(`'${thirdQuote}'`);
    break;
    //Check if the number is equal to four.
  case "4":
    let fourthQuote = (firstSentece[4] +', ' + secondSentence[4] + ', ' + lastSentence[4]);
    console.log(`'${fourthQuote}'`);
    break;
    //Check if the number is equal to five.
  case "5":
    let fithQuote = (firstSentece[4] +', ' + secondSentence[4] + ', ' + lastSentence[4]);
    console.log(`'${fithQuote}'`);
    break;
    //If the number is not between 0 and 6 This will throw an alert message.
  default:
    console.log(`'Wow not found please try again with a number less than 6'`);
}

// Choose between two types of quotation generators.
// so now the idea is to create two sets quotes (2 x 3 arrays) and let the user choose which quote set he prefer

let motivationFirstSentence = [
  'You shot the stars', 'You are good hurry up', "Don't let it go"
];

let sadFirstSentence = [
  "Don't cry", "Tell me if you need help", "You don't you look good"
];

let motivationSecondSentence = [
  "you're amazing", "good job Keep it up", "Nice work, fantastic"
];

let sadSecondSentence = [
  "It's not the end of the world", "Sorry to here that", "that must be painfull"
];

let motivationLastSentence = [
  "You nailed it!!!!", "Wow you're taking the next level!!!", "hahahah great!!!!"
];

let sadLastSentence = [
  "be happy", "you're just getting there", "Ohhhh that is not good to hear"
]
let choice = prompt('write "motivation" or "sad" here');

if (choice === "motivation") {
  let random1 = Math.floor(Math.random() * motivationFirstSentence.length);
  let element1 = motivationFirstSentence[random1];

  let random2 = Math.floor(Math.random() * motivationSecondSentence.length);
  let element2 = motivationSecondSentence[random2];

  let random3 = Math.floor(Math.random() * motivationLastSentence.length);
  let element3 = motivationLastSentence[random3];

  let motivationQuote = (element1 + ', ' + element2 + ', ' + element3);
  console.log(`'${motivationQuote}`);
  
}
if (choice === "sad") {
  let randomsad1 = Math.floor(Math.random() * sadFirstSentence.length);
  let elementsad1 = sadFirstSentence[randomsad1];

  let randomsad2 = Math.floor(Math.random() * sadSecondSentence.length);
  let elementsad2 = sadSecondSentence[randomsad2];

  let randomsad3 = Math.floor(Math.random() * sadLastSentence.length);
  let elementsad3 = sadLastSentence[randomsad3];

  let sadQuote = (elementsad1 + ', ' + elementsad2 + ', ' + elementsad3);
  console.log(`'${sadQuote}`);
}