var canvas;
var question;
var database;
var contestant;
var allContestants;
var contestantCount;
var gameState = 0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
   
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    game.update(1);
  }
  
}
