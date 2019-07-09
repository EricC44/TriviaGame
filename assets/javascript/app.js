// This is to listen for a mouse click with the Id "start"
var start = document.getElementById('start').addEventListener('click', trivia.startGame)
var timeLeft = document.getElementById('time-left').style.display = 'none'

var trivia = {
  // Trivia's properties used for the code

  correct: 0,
  incorrect: 0,
  unanswered: 0,
  setI: 0,
  timer: 20,
  timerIsOn: false,
  timerId: '',

  // Questions with their choices and answer keys
  questions:  {
    q1: 'Which champion is NOT Demacian?',
    q2: 'Which champion is consumed with vengeance against Thresh for holding his wifes soul?',
    q3: 'What item clears almost all forms of crowd control?',
    q4: 'Which summoner spell is the most commonly used in League of Legends games?',
    q5: 'When does rift hearld despawn on the map?',
    q6: 'What elemental drake regenerates health over time?',
    q7: 'How many towers does each team have in each summoners rift game?',
    q8: "What champion does NOT have an official solo in the League of Legends music video 'Popstars' by KD/A",
    q9: "Which champion is also known as 'The Eternal Nightmare'?",
    q10: 'Which NBA team does NOT own a professional League of Legends team?',
    q11: 'Which single item is the most expensive in the game?',
    q12: 'How many dragons can you have before Elder Dragon spawns?',
    q13: 'As of April 2nd 2019, which champion is considered newest? (excluding reworks)',
    q14: 'Which champions ult is called Shurima Shuffle?',
    q15: 'Who is Riot Games beloved Yordle and mascot?'

  },
  choices: {
    q1: ['Garen', 'Fiora', 'Katarina', 'Lux'],
    q2: ['Lucian', 'Rakan', 'Shen', 'Swain'],
    q3: ['Statikk Shiv', 'Quicksilver Sash', 'Adaptive Helm', 'Phantom Dancer'],
    q4: ['Ghost', 'Teleport', 'Flash', 'Ignite'],
    q5: ['14:55', '19:55', '24:55', '29:55'],
    q6: ['Mountain', 'Infernal', 'Wind', 'Ocean'],
    q7: ['8', '11', '13', '15'],
    q8: ["Kai'sa", 'Ahri', 'Akali', 'Evelyyn'],
    q9: ['Zed', 'Karthus', 'Diana', 'Nocturne'],
    q10: ['Houston Rockets', 'Golden State Warriors', 'Los Angeles Lakers', 'Cleveland Caveliers'],
    q11: ['Serrated Dirk', 'Needlessly Large Rod', 'Boots of Speed', 'Ruby Crystal'],
    q12: ['4', '5', '6', '7'],
    q13: ['Sylas', 'Zoe', 'Neeko', "Kai'sa"],
    q14: ['Ziggs', 'Jayce', 'Vi', 'Azir'],
    q15: ['Ashe', 'Teemo', 'Yasuo', 'Jinx'],
  },
  answers: {
    q1: 'Katarina',
    q2: 'Lucian',
    q3: 'Quicksilver Sash',
    q4: 'Flash',
    q5: '19:55',
    q6: 'Ocean',
    q7: '11',
    q8: "Kai'sa",
    q9: 'Nocturne',
    q10: 'Los Angeles Lakers',
    q11: 'Needlessly Large Rod',
    q12: '6',
    q13: 'Sylas',
    q14: 'Azir',
    q15: 'Teemo'
  },

  // trivia methods required to start game
  // start game
  startGame: function() {
    //reset game values to 0 after begining of game
    trivia.correct = 0,
    trivia.incorrect = 0,
    trivia.unanswered = 0,
    clearInterval(trivia.timerId),

    document.getElementById('trivia').style.visibility = 'visible',

    document.getElementById('timer').innerText,

    document.getElementById('start').style.display = 'none',

    document.getElementById('time-left').style.display = 'block',

    trivia.firstQuestion();

  },
  firstQuestion: function() {

    trivia.timer = 10,

    document.getElementById('timer').innerText(trivia.timer),
  }

}

// function startGame () {
//   hideStart()
//   // correctGuess = 0
//   // incorrectGuess = 0
//   // unanswered = 0
//   currentQuestion = 0
//   clearInterval(IdTimer)
//   startTimer = true
//   // if(startTimer = true) {
//   // timerRunning();
//   // }
//   // timerRunning();

//   // displayTrivia();
//   document.getElementById('timer').innerText = timer

//   document.getElementById('time-left').style.display = 'block'
//   firstQuestion()
//   // clearResults();
//   // timerRunning();
// }

// // function hideStart () {
// //   document.getElementById('start').style.display = 'none'
// // }

// // // This function is suppose to start the first question and timer
// // function firstQuestion () {
// //   currentQuestion = 0
// //   document.getElementById('questionId').innerHTML = '<h2>' + questions[0].question + '</h2>'
// //   for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
// //     document.getElementById('choices').innerHTML = "<button class='answer-button ml-3 mr-3' id='button' data-name=''" + questions[currentQuestion].answers[i] +
// //       '>' + questions[currentQuestion].answers[i] + '</button>'
// //     console.log(questions[questions.answers.length])
// //   }
// //   // console.log();
// // }
