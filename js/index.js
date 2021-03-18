'use strict'



 let questionContainer = document.getElementById('question');
 let optionOne = document.getElementById('answerA');
 let optionTwo = document.getElementById('answerB');
 let optionThree = document.getElementById('answerC');
 let optionFour = document.getElementById('answerD');
 let score = document.getElementById('score')
 let startGame = document.getElementById('start');
 let getQuestion = 0;

let myQuestions = [{

		question1 : {
			questionTitle:"What is my name?",

			questionOptions : {
				opt1: "Cindy",
				opt2: "Candy",
				opt3: "Adaure",
				opt4:"Baby"
			},
			correct:"Adaure"
		},

		question2 : {
			questionTitle:"When was the last Teen Hack held?",

			questionOptions: {
				opt1: " A: 2003",
				opt2: "B: 2019",
				opt3: "C: 2012",
				opt4:"D: Never"
			},
			correct: "C: 2012"
		},

		question3 : {
			questionTitle:"How many colors doe a rainbow have?",

			questionOptions: {
				opt1: " A: 5",
				opt2: "B: 2",
				opt3: " C: 12",
				opt4:"D: 7"
			},
			correct: "D: 7"
		}
	}];
 	function startQuiz(){

	 	for (let i = 0 ;  i < myQuestions.length ; i++) {

	      questionContainer.innerHTML = myQuestions[i].question1.questionTitle;
	      optionOne.innerHTML = myQuestions[i].question1.questionOptions.opt1;
	      optionTwo.innerHTML = myQuestions[i].question1.questionOptions.opt2;
	      optionThree.innerHTML = myQuestions[i].question1.questionOptions.opt3;
	      optionFour.innerHTML = myQuestions[i].question1.questionOptions.opt4;
	    }
	    console.log(questionContainer);
 }


 	function checkAnswer(){
	 	for (let i = 0 ;  i < myQuestions.length ; i++) {

	 		if (optionOne.innerText == myQuestions[i].question1.correct) {
	 			alert('weldone')
	 		} else if(optionTwo.innerText == myQuestions[i].question1.correct){
	 			alert('weldone')
	 		}else if(optionThree.innerText == myQuestions[i].question1.correct){
	 			alert('weldone')
	 		}else if(optionFour.innerText == myQuestions[i].question1.correct){
	 			alert('weldone')
	 		}else{
	 			alert('you failed')
	 		}
	    }
	    console.log(optionOne)
	 }