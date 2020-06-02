//These are the peices sentences to form the quotes
const sentenceOne = ("There wasn't a problem in the world that couldn't be solved with brain power");
const sentenceTwo = ("Those who miss the boat now, will miss it forever");
const sentenceThree = ("Great things never come from comfort zones.");
const sentenceFour = ("The harder you work for something, the greater you'll feel when you achieve it.");
const sentenceFive = ("Success doesn't just find you, you have to go out and get it");
/*create quotatations with combination of at least three peices of sentences.*/
const firstQuote = `${sentenceOne}, ${sentenceTwo}, ${sentenceThree}`;
  console.log(firstQuote);
const secondQuote = `${sentenceFive}, ${sentenceFour}, ${sentenceOne}`
  console.log(secondQuote);
const thirdQuote = `${sentenceFive}, ${sentenceThree}, ${sentenceOne}, ${sentenceTwo}`;
  console.log(thirdQuote);

//search a new quote

let newQuote = prompt('Write here "motivation" or "big motivation" to search quote');
if (newQuote == "motivation") {
  alert(firstQuote);
} else if (newQuote == "big motivation") {
  alert(secondQuote);
} else if (newQuote == "") {
  alert("please enter one of the word in quotes 'motivation' or 'big motivation'")
} else {
  prompt(alert("your request is not found, please try again"))
}