$(document).ready(function() {
  var time = 100;
  var intervalId;
  var correctAnswers = 0;
  var incorrectAnswers = 0;

  $(".question-page").hide();
  $(".answer-page").hide();

  $("#start").on("click", function() {
    $(".start-page").hide();
    $(".question-page").show();
    $(".answer-page").hide();
    run();
  });

  function run() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    time--;
    $("#countDown").html(time);
  }

  function checkQuestion() {
    if (document.getElementById("right-answer").checked) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }

    if (document.getElementById("right-answer2").checked) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }

    if (document.getElementById("right-answer3").checked) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }

    if (document.getElementById("right-answer4").checked) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }

    if (document.getElementById("right-answer5").checked) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }

    if (document.getElementById("right-answer6").checked) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }

    if (document.getElementById("right-answer7").checked) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }

    if (document.getElementById("right-answer8").checked) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }

    var unansweredQuestions = 8 - correctAnswers - incorrectAnswers;

    $("#correct-answers").html(correctAnswers);

    $("#wrong-answers").html(incorrectAnswers);
  }

  $("#done").on("click", function() {
    checkQuestion();
    $(".start-page").hide();
    $(".question-page").hide();
    $(".answer-page").show();
  });

  if (time === 0) {
    checkQuestion();
    $(".start-page").hide();
    $(".question-page").hide();
    $(".answer-page").show();
  }
});
