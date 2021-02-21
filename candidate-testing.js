const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space?", 'True or false: 5000 meters = 5 kilometers.', '(5+3)/2*10=?', 'Geven the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?', 'What is the minimum crew size fo the ISS?'];
let correctAnswers = ['Sally Ride', 'True', '40', 'Trajectory', '3'];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('What is your name?');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(i=0;i<questions.length;i++) {
    candidateAnswers += input.question(questions[i]);
}

function gradeQuiz(candidateAnswers) {
  let correct = 1;
  let numberOfQuestions = questions.length
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for(i=0;i<candidateAnswers;i++) {
    if(candidateAnswers[i] = correctAnswers[i]) {
      correct +=1
    } else {
      correct += 0
    }
  }
  let grade = (correct/numberOfQuestions)*100
  if(grade >= 80) {
    console.log(`Grade: ${grade} you passed!`)
  } else {
    console.log(`Grade: ${grade} you failed.`)
  }
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log('Greetings, ' + candidateName + '!');
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};