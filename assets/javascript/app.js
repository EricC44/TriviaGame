
//This is to make sure the jQuery doesnt start early.
$(document).ready(function(){

document.getElementById("time-left").style.display = "none";
//This is to listen for a mouse click with the Id "start"
var startGame = document.getElementById("start").addEventListener("click" , startGame);

//document.addEventListener("click" , currentAnswer);

//Global variables;

var correctGuess = 0;
var incorrectGuess = 0;
var unanswered = 0;
var currentQuestion = 0;
var timer = 30;
var startTimer = true;
var IdTimer = "";

//This is the Questions array
var questions = {
    q1: "Which champion is NOT Demacian?",
    q2: "Which champion is consumed with vengeance against Thresh for holding his wifes soul?",
    q3: "What item clears almost all forms of crowd control?",
    q4: "Which summoner spell is the most commonly used in League of Legends games?",
    q5: "When does rift hearld despawn on the map?",
    q6: "What elemental drake regenerates health over time?",
    q7: "How many towers does each team have in each summoners rift game?",
    q8: "What champion does NOT have an official solo in the League of Legends music video 'Popstars' by KD/A",
    q9: "Which champion is also known as 'The Eternal Nightmare'?",
    q10: "Which NBA team does NOT own a professional League of Legends team?",
    q11: "Which single item is the most expensive in the game?",
    q12: "How many dragons can you have before Elder Dragon spawns?",
    q13: "As of April 2nd 2019, which champion is considered newest? (excluding reworks)",
    q14: "Which champions ult is called Shurima Shuffle?",
    q15: "Who is Riot Games beloved Yordle and mascot?",









}
//This is the choices array
var choices = {
    q1: ["Garen", "Fiora" , "Katarina" , "Lux"],
    q2: ["Lucian" , "Rakan" , "Shen" , "Swain"],
    q3: ["Statikk Shiv" , "Quicksilver Sash" , "Adaptive Helm" , "Phantom Dancer"],
    q4: ["Ghost" , "Teleport" , "Flash" , "Ignite"],
    q5: ["14:55" , "19:55" , "24:55" , "29:55"],
    q6: ["Mountain" , "Infernal" , "Wind" , "Ocean"],
    q7: ["8" , "11" , "13" , "15"],
    q8: ["Kai'sa" , "Ahri" , "Akali" , "Evelyyn"],
    q9: ["Zed" , "Karthus" , "Diana" , "Nocturne"],
    q10: ["Houston Rockets" , "Golden State Warriors" , "Los Angeles Lakers" , "Cleveland Caveliers"],
    q11: ["Serrated Dirk" , "Needlessly Large Rod" , "Boots of Speed" , "Ruby Crystal"],
    q12: ["3" , "4" , "5" , "6"],
    q13: ["Sylas" , "Zoe" , "Neeko" , "Kai'sa"],
    q14: ["Ziggs" , "Jayce" , "Vi" , "Azir"],
    q15: ["Ashe" , "Teemo" , "Yasuo" , "Jinx"],











}
//This is the answers array
var answers = {
    q1: "Katarina",
    q2: "Lucian",
    q3: "Quicksilver Sash",
    q4: "Flash",
    q5: "19:55",
    q6: "Ocean",
    q7: "11",
    q8: "Kai'sa",
    q9: "Nocturne",
    q10: "Los Angeles Lakers",
    q11: "Needlessly Large Rod",
    q12: "6",
    q13: "Sylas",
    q14: "Azir",
    q15: "Teemo",












} 



  function startGame() {
    correctGuess = 0;
    incorrectGuess = 0;
    unanswered = 0;
    currentQuestion = 0;
    clearInterval(IdTimer);
    startTimer = true;
   
    
    firstQuestion();
    clearResults();
    timerRunning();
  }
//This is to clear my results once you restart the game (working on)
  function clearResults() {
  document.getElementById("final-results").innerHTML = '';
  }
  


  //This function is suppose to start the first question and timer
  function firstQuestion() {
    timer = document.getElementById("time-left").innerText;
    
    




    //This is just to make sure that the 
    if(!startTimer) {
        timer = setInterval(count , 1000);
        
    }
    //This is hopefully putting the questions into the HTML as well as keeping to the question.
    var questionLeagueOptions;
     questionLeagueOptions = Object.values(questions)[currentQuestion];
    questionLeagueOptions = document.getElementById("question").innerText;

    var questionLeagueChoices = Object.values(choices[currentQuestion]);
    checkGuess(questionLeagueChoices);
    

    //This is supposed to append a button per possible choice
    $.each(questionLeagueOptions, function(index, key){
      $('#choices').append($('<button class="option btn btn-default btn-lg">'+key+'</button>'));
      console.log(index);
    })

  }
  //This is hopefully the timer and final seconds and decrement
  function timerRunning() {

    if(timer > -1 && currentQuestion < Object.keys(questions).length){

      timer = document.getElementById("timer").innerText;
      timer --;
      if(timer === 10){
        
      }
    }
    //This is if you cannot think of an answer in time.
    else if(timer === -1){
      unanswered++;
      var finalResult = false;
      clearInterval(IdTimer);
      resultId = setTimeout(guessResult , 1000);
      document.getElementById("final-results").innerHTML;
      alert("Incorrect, the correct answer was"+ Object.values(answers)[currentQuestion]);

    }
    //This is leading up to the final results and the data behind it.
    else if(currentQuestion = Object.keys(questions).length) {

      document.getElementById("final-results").innerText;
      var finalPara = document.createElement("p");
      var finalText = document.createTextNode("Good job, here are the results!" + "Correct:" + correctGuess + "Incorrect:" + incorrectGuess + "Unanswered:" + unanswered + "Play again?");
      finalPara.appendChild(finalText);
      var element = document.getElementById("final-results");
      element.appendChild(finalPara);
      hiddenGame();
      theResults();  

    }
    

  }
  //This Im trying to hide the game itself and keep the results.
  function hiddenGame() {
    document.getElementById("trivia").style.display = "none";
  }
  //This Im trying to show the start button.
  function showStart() {
    document.getElementById("start").style.display = "block";
  }
  //This function is to check to see if our guess is correct or not.
  function checkGuess() {

    IdResults = setTimeout(guessResult, 1000);
    //This is our answers array
    var currentAnswer = Object.values(answers)[currentQuestion];
    
    //This is whenever you guess correctly on the function.
    if(currentAnswer.text === correctGuess) {
      this.classList.add("btn-success");
      this.classList.remove("btn-default");
      correctGuess++;
      clearInterval(IdTimer);
      IdResults = setTimeout(guessResult, 1000);
      var R = document.createElement("h3");
      var A = document.createTextNode("Correct Guess!");
      R.appendChild(A);

    } else {

      this.classList.add("btn-danger");
      this.classList.remove("btn-default");
      incorrectGuess++;
      clearInterval(IdTimer);
      IdResults = setTimeout(guessResult, 1000);
      var R = document.createElement("h3");
      var A = document.createTextNode("Wrong! Correct answer is " + currentAnswer);
      R.appendChild(A);
    }
  }
  function theResults() {

    currentQuestion++;
    document.getElementById("choices").style.display = "none";
    document.getElementById("final-results").style.display = "none";

    firstQuestion();
    showStart();

  }
















});
