const state = ['X', 'O']; //0 corresponds to x and 1 corresponds to o
var check = 0;
//initializing board grid
 const startBoard = () => {
  var board = document.getElementById("board");
  var tiles = board.getElementsByTagName("div");
  var game = document.getElementById("game")
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].className = "square";
  }  
}
//self explanatory
function XorO(n) {
  if (n.target.classList.contains("square")) {
      if (state[check]== 'X'&& n.target.innerHTML == '') {
         n.target.classList.add("X");
         n.target.innerHTML = "X";
         check++;
      } else {
      		if (state[check] == 'O' && n.target.innerHTML == ''){
        		n.target.classList.add("O");
       			 n.target.innerHTML = "O";
       			 check--;
      		}
  		}
  }
     whoWins();
}
//Highlight tile
function hover(n) {
  var tiles = board.getElementsByTagName("div");
  if (n.target.classList.contains("square")) { 
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].classList.remove("hover");
    }
    n.target.classList.add("hover");
  }
}
//Check all combos
function whoWins() {
  var board = document.getElementById("board");
  var tiles = board.getElementsByTagName("div");
  let status = document.getElementById("status");
 
  //columns
if (tiles[0].innerHTML == tiles[3].innerHTML && tiles[0].innerHTML == tiles[6].innerHTML) {
      if (tiles[0].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if (tiles[0].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      }
  }
if (tiles[1].innerHTML == tiles[4].innerHTML && tiles[1].innerHTML == tiles[7].innerHTML) {
      if (tiles[1].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if (tiles[1].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      }
  }
if (tiles[2].innerHTML == tiles[5].innerHTML && tiles[2].innerHTML == tiles[8].innerHTML) {
      if (tiles[2].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if (tiles[2].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      }
  }
   //rows
  if (tiles[0].innerHTML == tiles[1].innerHTML && tiles[0].innerHTML == tiles[2].innerHTML) {
      if (tiles[0].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if(tiles[0].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      } 
  }
  if (tiles[3].innerHTML == tiles[4].innerHTML && tiles[3].innerHTML == tiles[5].innerHTML) {
      if (tiles[3].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if (tiles[3].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      }
  } 
if (tiles[6].innerHTML == tiles[7].innerHTML && tiles[6].innerHTML == tiles[8].innerHTML) {
      if (tiles[6].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if (tiles[6].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      }
  }
  //Diagonals
if (tiles[0].innerHTML == tiles[4].innerHTML && tiles[0].innerHTML == tiles[8].innerHTML) {
      if (tiles[0].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");

      } else if (tiles[0].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      }
  }
if (tiles[2].innerHTML == tiles[4].innerHTML && tiles[2].innerHTML == tiles[6].innerHTML) {
      if (tiles[2].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
      } else if (tiles[2].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      }
  }
}
//Reset
function newGame(n) {
  var board = document.getElementById("board");
  var tiles = board.getElementsByTagName("div");
  let status = document.getElementById("status");
  if(n.target.nodeName ==='BUTTON'){
    status.classList.remove("you-won");
    status.innerHTML = "Move your mouse over a square and clic to play an X or an O.";
    for (let i = 0; i < tiles.length; i++) {
      if(tiles[i].innerHTML == "X"){
        tiles[i].innerHTML = "";
        tiles[i].classList.remove("X");
      } else if(tiles[i].innerHTML == "O") {
        tiles[i].innerHTML = "";
        tiles[i].classList.remove("O");
      } 
    }
  }
}
window.onload = () => {
  startBoard();
  board.addEventListener("mouseover", hover);
  board.addEventListener("click", XorO);
  game.addEventListener("click", newGame);
}