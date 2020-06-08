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
// console.log(`'${fullQuote}'`);
//1. use prompt to ask the user how many times we want to generate a random quote
//2. check if the prompt give us something between 1 and 5
//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
//4. refactor our code into a function, and put the function call inside the loop
//4.1 generate random index numbers
//4.2 show the generated quotes


let number = prompt('How many quotes do you want between one to five');
if (number >= 1 && number <= 5) {
  for (let i = 0; i < number; i++) {
    const quote = () => {
      let randomNumber3 = Math.floor(Math.random() * lastSentence.length);
      let randomElement3 = lastSentence[randomNumber3];
      // console.log(randomElement3)

      let randomNumber1 = Math.floor(Math.random() * firstSentece.length);
      let randomElement = firstSentece[randomNumber1];
      // console.log(randomElement);

      let randomNumber2 = Math.floor(Math.random() * secondSentence.length);
      let randomElement2 = secondSentence[randomNumber2];
      // console.log(randomElement2);

      let fullQuote = (randomElement + ' ' + randomElement2 + ' ' +  randomElement3);

      console.log(`quote:'${fullQuote}'`);
      }
    quote();
  }
} else {
  alert("not found please try again")
}