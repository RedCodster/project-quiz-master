
//Part 2

var Question = function(option) {
  this.ask = option.ask;
  this.dummy1 = option.dummy1;
  this.dummy2 = option.dummy2;
  this.answer = option.answer;
  this.image = option.image;
}

var question1 = new Question({
  ask: "Which quarterback was NOT chosen in the 1st round of the 1983 NFL Draft?",
  dummy1: "Dan Marino",
  dummy2: "Jim Kelly",
  answer: "Boomer Esiason",
  image: "images/jimkelly.jpg"
});


var question2 = new Question({
  ask: "When was overtime for regular season games first introduced in the National Hockey League?",
  dummy1: "1999",
  dummy2: "2001",
  answer: "2005",
  image: "images/NHL.jpg"
});

var question3 = new Question({
  ask: "What was the last horse before American Pharaoh to win the Triple Crown?",
  dummy1: "Seattle Slew",
  dummy2: "Intrepid",
  answer: "Affirmed",
  image: "images/racehorse.jpeg"
});

var questions = [question1, question2, question3];


$(document).ready(function(){
  var currentQ = 0;
  var subject = '';
  var level = '';

  // Part 1
  $('#start-button').on('click',function(){
    $('#game').show();
    $('#start').hide();
    pickSubject();
    pickLevel();
    $('#category > h1').text(subject +' ('+level+')');
    loadQuestion();
  });

  var pickSubject = function() {
    var subject1 = $('#subject1').is(":checked");
    var subject2 = $('#subject2').is(":checked");
    var subject3 = $('#subject3').is(":checked");
    if (subject1) {
      subject = $('#subject1').val();
    } else if (subject2) {
      subject = $('#subject2').val();
    } else {
      subject = $('#subject3').val();
    }
  }

  var pickLevel = function () {
    var level1 = $('#level1').is(":checked");
    var level2 = $('#level2').is(":checked");
    var level3 = $('#level3').is(":checked");
    if (level1) {
      level = $('#level1').val();
    } else if (level2) {
      level = $('#level2').val();
    } else {
      level = $('#level3').val();
    }
  }

  var loadQuestion= function() {
    var question = questions[currentQ];
    $('#question').text(question.ask);
    $('#pick1').text(question.dummy1);
    $('#pick2').text(question.dummy2);
    $('#pick3').text(question.answer);
    $('#qpic').attr('src', question.image);
  }

  $('#answer-button').on('click',function(){
    //Check answer?


    //Go to next question
    currentQ++;
    loadQuestion();
  });




  // Part 2





});