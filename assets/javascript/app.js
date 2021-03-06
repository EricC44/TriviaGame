// Questions with their choices and answer keys
var trivia = [{
  question: 'Which champion is NOT Demacian?',
  choices: ['Garen', 'Fiora', 'Katarina', 'Lux'],
  answer: 2
}, {
  question: 'Which champion is consumed with vengeance against Thresh for holding his wifes soul?',
  choices: ['Lucian', 'Rakan', 'Shen', 'Swain'],
  answer: 0
}, {
  question: 'What item clears almost all forms of crowd control?',
  choices: ['Statikk Shiv', 'Quicksilver Sash', 'Adaptive Helm', 'Phantom Dancer'],
  answer: 1
}, {
  question: 'Which summoner spell is the most commonly used in League of Legends games?',
  choices: ['Ghost', 'Teleport', 'Flash', 'Ignite'],
  answer: 2
}, {
  question: 'When does rift hearld despawn on the map?',
  choices: ['14:55', '19:55', '24:55', '29:55'],
  answer: 1
}, {
  question: 'What elemental drake regenerates health over time?',
  choices: ['Mountain', 'Infernal', 'Wind', 'Ocean'],
  answer: 3

}, {
  question: 'How many towers does each team have in each summoners rift game?',
  choices: ['8', '11', '13', '15'],
  answer: 1
}, {
  question: "What champion does NOT have an official solo in the League of Legends music video 'Popstars' by KD/A",
  choices: ["Kai'sa", 'Ahri', 'Akali', 'Evelyyn'],
  answer: 0
}, {
  question: "Which champion is also known as 'The Eternal Nightmare'?",
  choices: ['Zed', 'Karthus', 'Diana', 'Nocturne'],
  answer: 3
}, {
  question: 'Which NBA team does NOT own a professional League of Legends team?',
  choices: ['Houston Rockets', 'Golden State Warriors', 'Los Angeles Lakers', 'Cleveland Caveliers'],
  answer: 2
}, {
  question: 'What is the most expensive item part in the game?',
  choices: ['Serrated Dirk', 'Needlessly Large Rod', 'Boots of Speed', 'Ruby Crystal'],
  answer: 1
}, {
  question: 'How many dragons can you defeat before Elder Dragon spawns?',
  choices: ['4', '5', '6', '7'],
  answer: 2
}, {
  question: 'As of April 2nd 2019, which champion is considered newest? (excluding reworks)',
  choices: ['Sylas', 'Zoe', 'Neeko', "Kai'sa"],
  answer: 0
}, {
  question: 'Which champions ult is called Shurima Shuffle?',
  choices: ['Ziggs', 'Jayce', 'Vi', 'Azir'],
  answer: 3
}, {
  question: 'Who is Riot Games beloved Yordle and mascot?',
  choices: ['Poppy', 'Teemo', 'Yasuo', 'Jinx'],
  answer: 'Teemo'
}]
var correct = 0
var incorrect = 0
var questionIndex = 0
// Making sure that our new game button does not appear at the start of the page
document.getElementById('newGame').style.display = 'none'
// This listens for the click of my start button to start the game
document.getElementById('start').addEventListener('click', startGame)
// This function starts the game
function startGame () {
  // This hides the start button once clicked
  document.getElementById('start').style.display = 'none'
  questionIndex = 0
  correct = 0
  incorrect = 0
  nextQuestion()
}
// This is the function to display the question and the choices to the question
function nextQuestion () {
  // This for loop loops through all of the trivia object, this also has our questions appear on the html page
  for (var i = 0; i < trivia.length; i++) {
    // This will iterate through each question in the index
    document.getElementById('currentQuestion').innerHTML = trivia[questionIndex].question
    
  }
  // This for loop goes through the iteration of each choice
  for (var j = 0; j < trivia[questionIndex].choices.length; j++) {
    // Creates a new bootstrap button element
    var buttons = document.createElement('button')
    // Puts the choices into the innerHTML button element
    buttons.innerHTML = trivia[questionIndex].choices[j]
    // Creates a bootstrap button classname
    buttons.className = 'btn btn-outline-primary'
    // This sets a variable to the HTML div 'choices'
    var buttonDiv = document.getElementById('choices')
    // appends the buttons to the html
    buttonDiv.appendChild(buttons)
    // This adds an event listener to the buttons we created
    buttonDiv.addEventListener('click', checkAnswer)
    // document.getElementById('choices').innerHTML += `<button id=jsButtons> ${trivia[questionIndex].choices[j]}</button>`

    console.log(trivia[questionIndex].choices[j])
    
  }
}

function checkAnswer() {
  if(trivia[questionIndex].choices === trivia[questionIndex].answer) {
    correct++
    document.getElementById('message').innerHTML = 'That is the correct answer! Good Job!'
    questionIndex++
    nextQuestion()
    
  } else {
    incorrect++
    document.getElementById('message').innerHTML = `I\'m sorry, that is the incorrect answer, the correct answer is ${trivia[questionIndex].answer}`
    questionIndex++
    document.getElementById('choices').innerHTML = ''
    nextQuestion()
    
  }
}
//  function correct() {
//   correct++
//   document.getElementById('message').innerHTML = 'That is the correct answer! Good Job!'
//   questionIndex++
// };

//  function incorrect() {
//   incorrect++
//   document.getElementById('message').innerHTML = `I\'m sorry, that is the incorrect answer, the correct answer is ${trivia[questionIndex].answer}`
//   questionIndex++
// }