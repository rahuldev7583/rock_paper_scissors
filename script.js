function startGame(){
  document.getElementById("start").style.display = "none";
  document.getElementById("game").style.display = "inline-block";
}
let arr = ['rock', 'paper', 'scissors'];
function computerSelection(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}
function game(player, computer){
  if(player === computer){
    document.getElementById("score").innerHTML = "Draw";
  } else if(player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper"){
    document.getElementById("score").innerHTML = "You Won";  
  }
  else{
    document.getElementById("score").innerHTML = "Computer Won"; 
  }
}
function clicked(value){ 
  let playerChoice = value;
  let computerChoice = computerSelection(arr);
  game(playerChoice, computerChoice);
  document.getElementById(computerChoice).classList.add("img");
  function cImage(){
  document.getElementById(computerChoice).classList.remove("img");
  }
  setTimeout(cImage, 700);
  console.log(playerChoice + " " + computerChoice);
}