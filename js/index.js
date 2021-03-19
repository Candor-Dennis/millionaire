"use strict"


let myQuestions = {

		question1 : {

				questionTitle:"What is my name?",
				opt1: "Cindy",
				opt2: "Candy",
				opt3: "Adaure",
				opt4:"Baby",
			   correct:"Adaure"
		 },

		question2 : {

			questionTitle:"When was the last Teen Hack held?",
				opt1: " A: 2003",
				opt2: "B: 2019",
				opt3: "C: 2012",
				opt4:"D: Never",
			   correct: "C: 2012"
		},

		question3 : {
			questionTitle:"How many colors does a rainbow have?",
				opt1: " A: 5",
				opt2: "B: 2",
				opt3: " C: 12",
				opt4:"D: 7",
			    correct: "D: 7"
		}
	};

	 let questionContainer = document.getElementById('question');
	 let optionOne = document.getElementById('answerA');
	 let optionTwo = document.getElementById('answerB');
	 let optionThree = document.getElementById('answerC');
	 let optionFour = document.getElementById('answerD');
	 let score = document.getElementById('score')
	 let startGame = document.getElementById('start');


	 function startQuiz(){
	 		const key = Object.keys(myQuestions);
			const randomIndex = key[Math.floor(Math.random() * key.length)];
			const question = myQuestions[randomIndex];

			questionContainer.innerHTML = question.questionTitle;
			optionOne.innerHTML = question.opt1;
			optionTwo.innerHTML = question.opt2;
	      	optionThree.innerHTML = question.opt3; 
	      	optionFour.innerHTML = question.opt4;
	      	let play = startGame.classList.add("d-none");
	      	let newPlay = document.getElementById('show').classList.remove("d-none");
	      	let showScore = document.getElementById('show2').classList.remove("d-none");
	 }

	 function checkAnswer(data, question){
	 	console.log(question);
	 }

