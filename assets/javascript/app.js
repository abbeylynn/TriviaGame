$(document).ready(function(){

	var time = 0;
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var unansweredQuestions = 0;
	var questions

	$(".question-page").hide();
	$(".answer-page").hide();

	$("#start").on("click", function() {
			$(".start-page").hide();
			$(".question-page").show();
			$(".answer-page").hide();
		//$(".start-page").replaceWith($(".question-page"));
	})
//title page - when start button is clicked, hide start page, show question page div

//when question page loads, timer starts
//set up timer
	//countdown from x seconds
	//if timer runs out, move to answer page

//for each question
	//register answer
	//set right answer
	//if answer is correct, write to correct
	//if answer is incorrect, write to incorrect
	//if no answer is chosen, write to unanswered

//function check() {
    //document.getElementById("red").checked = true;}
//function uncheck() {
   // document.getElementById("red").checked = false;}

   //write correct, incorrect, unanswered to answer page

   //restart button (back to question page)

	  });