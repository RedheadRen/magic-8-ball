$(document).ready(function(){

var magic8Ball = {};
magic8Ball.listOfAnswers = ["yes", "most assuredly", "absolutely", "that is in your future", "you betcha!", "outlook good", "without a doubt", "it is certain",  "mostly likely", "signs point to yes", "no", "my sources say no", "outlook not good", "don't count on it", "extremely doubftul", "better not to say now", "reply hazy try again", "ask again later", "cannot predict now", "concentrate and ask again"];
 
// define the method
magic8Ball.askQuestion = function(question) {
     $("#8ball").effect( "shake" );

     // making the answer fade in over 4 seconds
     $("#answer").fadeIn(4000);
 
     // create a random number
     var randomNumber = Math.random();
 
     // make the random number between 0 and the number of items in your array
     var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
 
     // round down the number to be a whole number
     var randomIndex = Math.floor(randomNumberForListOfAnswers);
 
     // use that number to index a random number from the answers array
     var answer = this.listOfAnswers[randomIndex];

     $("#answer").text(answer);
     $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
     console.log(question);
     console.log(answer);
};

$("#answer").hide();

// This is code that will be turned into a button with jquery - magic8Ball.askQuestion("Will today be a great day?");
var onClick = function () {
     $("#answer").hide();
 
     $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
 
     //wait half a second before showing prompt
     setTimeout(
       function() {
           //show prompt
           var question = prompt("Ask a yes or no question");
           magic8Ball.askQuestion(question);
       }, 500);

};

$("#questionButton").click(onClick);

});