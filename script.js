$(document).ready(function(){
/* this is my code that is apparently very messy: 
var question = {};
question.ask = function (askit)
{
	console.log("My question is: " + askit);
};
question.ask("Will I ever move into my new house?");
var magic8Ball = {};
	magic8Ball.listOfAnswers = ["yes", "most assuredly", "absolutely", "that is in your future", "you betcha!", "outlook good", "without a doubt", "it is certain",  "mostly likely", "signs point to yes", "no", "my sources say no", "outlook not good", "don't count on it", "extremely doubftul", "better not to say now", "reply hazy try again", "ask again later", "cannot predict now", "concentrate and ask again"];

var randomNumber = Math.random();
var randomNumberArray = randomNumber * magic8Ball.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberArray);
var answer = magic8Ball.listOfAnswers[randomIndex];
console.log("answer = " + answer); */




var magic8Ball = {};
magic8Ball.listOfAnswers = ["yes", "most assuredly", "absolutely", "that is in your future", "you betcha!", "outlook good", "without a doubt", "it is certain",  "mostly likely", "signs point to yes", "no", "my sources say no", "outlook not good", "don't count on it", "extremely doubftul", "better not to say now", "reply hazy try again", "ask again later", "cannot predict now", "concentrate and ask again"];
 
// define the method
magic8Ball.askQuestion = function(question) {
 
     // create a random number
     var randomNumber = Math.random();
 
     // make the random number between 0 and the number of items in your array
     var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
 
     // round down the number to be a whole number
     var randomIndex = Math.floor(randomNumberForListOfAnswers);
 
     // use that number to index a random number from the answers array
     var answer = this.listOfAnswers[randomIndex];
 
     console.log(question);
     console.log(answer);
};
 
// This is code that will be turned into a button with jquery - magic8Ball.askQuestion("Will today be a great day?");

});