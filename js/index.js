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
		},
		question4 : {
			questionTitle:"How many fingers make up 10 hands?",
				opt1: " A: 50",
				opt2: "B: 200",
				opt3: " C: 120",
				opt4:"D: 100",
			    correct: "D: 100"
		},
		question5 : {
			questionTitle:"What is my favourite color?",
				opt1: " A: yellow",
				opt2: "B: green",
				opt3: " C: black",
				opt4:"D: white",
			    correct: "C: black"
		},
		question6 : {
			questionTitle:"How many fingers make up 10 hands?",
				opt1: " A: 50",
				opt2: "B: 200",
				opt3: " C: 120",
				opt4:"D: 100",
			    correct: "D: 100"
		},
		question7 : {
			questionTitle:"What does a princess love?",
				opt1: " A: Crown",
				opt2: "B: pink dress",
				opt3: " C: phones",
				opt4:"D: cars",
			    correct: " A: Crown"
		},
		question8 : {
			questionTitle:"How many legs does an ant have?",
				opt1: " A: 10",
				opt2: "B: 8",
				opt3: " C: 16",
				opt4:"D: 35",
			    correct: "B: 8"
		},
		question9 : {
			questionTitle:"What does a chef do?",
				opt1: " A: cook",
				opt2: "B: dance",
				opt3: " C: teach",
				opt4:"D: cry",
			    correct: " A: cook"
		},
		question10 : {
			questionTitle:"Where do rays come from",
				opt1: " A: shadows",
				opt2: "B: beam",
				opt3: " C: light",
				opt4:"D: books",
			    correct: " C: light"
		}
	};

	 let questionContainer = document.getElementById('question');
	 let optionOne = document.getElementById('answerA');
	 let optionTwo = document.getElementById('answerB');
	 let optionThree = document.getElementById('answerC');
	 let optionFour = document.getElementById('answerD');
	 let score = 0;
	 let getQuestion = 0;
	 let correctAnswer;
	 let review = document.getElementById('finals');
	 let success = document.getElementById('success');
	 let danger = document.getElementById('success');
	 
	 function startQuiz(){

	 		if (getQuestion < 10) {



	 			const key = Object.keys(myQuestions);
				const randomIndex = key[Math.floor(Math.random() * key.length)];
				const question = myQuestions[randomIndex];
				correctAnswer = question.correct;

				questionContainer.innerHTML = question.questionTitle;
				optionOne.innerHTML = question.opt1;
				optionTwo.innerHTML = question.opt2;
		      	optionThree.innerHTML = question.opt3; 
		      	optionFour.innerHTML = question.opt4;
		      	
		      	let newPlay = document.getElementById('show').classList.remove("d-none");
		      	
		      	getQuestion++
	 		} else {
	 			alert("No more questions");
	 			console.log('Your score is now' + score)
	 			let stopGame = document.getElementById('endGame').classList.add('d-none')
	 			let newPlay = document.getElementById('show').classList.add("d-none");
	 			let showResult =  document.getElementById('result').innerHTML = "<h3 class='text-center'>Your Total Score is : " + score + "</h3>";
	 			let checkReview = review.classList.remove('d-none')
	 		}
	 		
	 }
	
	startQuiz()
	


	 function checkAnswer(answerPosition){
	 	let chosenAnswer = document.getElementById(answerPosition).innerHTML;
	 	

	 		if (chosenAnswer == correctAnswer) {
	 			score++
	 			alert('Weldone');
	 			console.log(score)

				startQuiz()

	 		} else {
	 			alert('fail');

	 			startQuiz()
	 		}

	 }

	 function newSuccess(){
	 	alert('You rock');
	 	let checkReview = review.classList.add('d-none')
	 }

	 function newDanger(){
	 	alert('You Lost');
	 	let checkReview = review.classList.add('d-none')
	 }

