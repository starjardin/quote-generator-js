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
];

//Another source of quotes
let sadFirstSentence = [
  "Don't cry", "Tell me if you need help", "You don't you look good", "Thats is terrible", "That is no fantastic"
];

let sadSecondSentence = [
  "It's not the end of the world", "Sorry to here that", "that must be painfull", "No way !!!", "It will be fine"
];
let sadLastSentence = [
  "be happy", "you're just getting there", "Ohhhh that is not good to hear", 'What a pity', "O!!!! gosh"
];

// Call the peices of sentences radomly
let randomNumber1 = Math.floor(Math.random() * firstSentece.length);
let randomElement = firstSentece[randomNumber1];

let randomNumber2 = Math.floor(Math.random() * secondSentence.length);
let randomElement2 = secondSentence[randomNumber2];

let randomNumber3 = Math.floor(Math.random() * lastSentence.length);
let randomElement3 = lastSentence[randomNumber3];

//This is the full quoteation

let fullQuote = (randomElement + ' ' + randomElement2 + ' ' +  randomElement3)

const quote = () => {
  let randomNumber3 = Math.floor(Math.random() * lastSentence.length);
  let randomElement3 = lastSentence[randomNumber3];

  let randomNumber1 = Math.floor(Math.random() * firstSentece.length);
  let randomElement = firstSentece[randomNumber1];

  let randomNumber2 = Math.floor(Math.random() * secondSentence.length);
  let randomElement2 = secondSentence[randomNumber2];

  let fullQuote = (randomElement + ' ' + randomElement2 + ' ' +  randomElement3);
  return `quote:'${fullQuote}'`;
  }

const sadquote = () => {
  let indexRandom1 = Math.floor(Math.random() * sadFirstSentence.length);
  let pharse1 = sadFirstSentence[indexRandom1];

  let indexRandom2 = Math.floor(Math.random() * sadSecondSentence.length);
  let phrase2 = sadSecondSentence[indexRandom2];

  let indexRandom3 = Math.floor(Math.random() * sadLastSentence.length);
  let phrase3 = sadLastSentence[indexRandom3];
  
  let fullSadquote = (pharse1 + ' ' + phrase2 + ' ' + phrase3)
  return `quote: '${fullSadquote}'`
}

//Create a function to generate two sources of quotes
const newQuoteGenerator = () => {
  let number = prompt('How many quotes do you want between one to five');
  //if the number in the prompt is in between one to five, then do use this code below.
  if (number >= 1 && number <= 5) {
    let choice = prompt('Choose between 1 (motivational) and 2 (sad) quotes');
    //For loop to impliment how many quotes to display depends on the users.
    for (let i = 0; i < number; i++) {
      //If the number in the second prompt is equal to "1" take the quote from motivatianl quote and if it is equal ti "2" take the quote from sadQuote.
      if (choice === "1") {
        console.log(quote())
      } else if (choice === "2") {
        console.log(sadquote())
    }
  }
}
// If the number is not between one to five, then do this step again
  while (number < 1 || number > 5) {
    let number = prompt('How many quotes do you want between one to five');
    if (number >= 1 && number <= 5) {
      let choice = prompt('Choose between 1 (motivational) and 2 (sad) quotes');
      for (let i = 0; i < number; i++) {
        if (choice === "1") {
          console.log(quote())
        }
        if (choice === "2") {
          console.log(sadquote())
        }
      }
    }  
  }
}
newQuoteGenerator();

//This is asking the user wether they still want to continue or to stop

let next = prompt('Do you want to continue "yes" or not "no"');
if (next === "yes") {
  newQuoteGenerator();
} else if (next === "no") {
  alert("Ok! see you then, good bye. Did you enjoy the quotes")
}
