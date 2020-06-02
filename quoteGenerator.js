//These are the peices sentences to form the quotes. declare variables to form the quotes

const sentenceOne = ("There wasn't a problem in the world that couldn't be solved with brain power");
const sentenceTwo = ("Those who miss the boat now, will miss it forever");
const sentenceThree = ("Great things never come from comfort zones.");
const sentenceFour = ("The harder you work for something, the greater you'll feel when you achieve it.");
const sentenceFive = ("Success doesn't just find you, you have to go out and get it");

/*create quotatations with combination of at least three peices of sentences.*/

const firstQuotation = `${sentenceOne}, ${sentenceTwo}, ${sentenceThree}`;
  console.log(firstQuotation);
const secondQuotation = `${sentenceFive}, ${sentenceFour}, ${sentenceOne}`
  console.log(secondQuotation);
const thirdQuotation = `${sentenceFive}, ${sentenceThree}, ${sentenceOne}, ${sentenceTwo}`;
  console.log(thirdQuotation);

//search a new quote depends on what number the user'input.

//number of the quotes generated from one to five
//declare five variables will be used in prompt, user interface below.

const quote1 = (`${sentenceThree}, ${sentenceFour}, ${sentenceTwo}`);
const quote2 = (`${sentenceTwo}, ${sentenceThree}, ${sentenceOne}`);
const quote3 = (`${sentenceFour}, ${sentenceThree}, ${sentenceTwo}`);
const quote4 = (`${sentenceTwo}, ${sentenceOne}, ${sentenceThree}`);
const quote5 = (`${sentenceOne}, ${sentenceTwo}, ${sentenceThree}`);

//this is the prompt where the user entred the number

let numberOfQuotes = prompt("enter a number bigger than 0 and less than five here");

//use switch to check the nmber in the prompt input.

switch(numberOfQuotes) {
  case '1':
    // if the number is equal to one it will return quote1
    alert(quote1);
    break;
  case '2':
    //if the number is equal to two it will return quote2
    alert(quote2);
    break;
  case '3':
    //if the number is equal to three it will return quote3
    alert(quote3);
    break;
  case '4':
    //if the number is equal to four it will retun quote4
    alert(quote4);
    break;
  case '5':
    //if the number is equal to five it will return to quote5
    alert(quote5);
    break;
  default:
    //if the number is none of the above it will return this error message to ask again.
 numberOfQuotes = (prompt("enter a number less than five here, please try again"));
  break;    
}
console.log(numberOfQuotes);