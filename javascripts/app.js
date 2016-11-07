"use strict";
//v2
let $pstatus1 = $("player1Status");
let $pstatus2 = $("player2Status");
let $playerChosen;
let $positionChosen1;
let $positionChosen2;
let player1;
let player2;
let player1Name = $('#player1-name').val();
let player2Name = $('#player2-name').val();
//v2


//****eventListener - position selected, dropdown menu//WORKING****
$("#player1_position").change((event) => {
  $positionChosen1 = $(event.target).val();
  // console.log("player one selected:",$(event.target).val());
});
$("#player2_position").change((event) => {
  $positionChosen2 = $(event.target).val();
  console.log("player two selected:", $(event.target).val());
});
//****eventListener - position selected, dropdown menu////WORKING****


//***function(s) - creates player 1 & 2////WORKING****
$("#createPlayer1").click((event) => {
  // console.log("createPlayer1 click working");
  createPlayerz($positionChosen1, "player1");
  populateBattlePageP1($pstatus1, player1, $positionChosen1);
});
$("#createPlayer2").click((event) => {
  // console.log("createPlayer1 click working");
  createPlayerz($positionChosen2, "player2");
  populateBattlePageP2($pstatus2, player2, $positionChosen2);
});

function createPlayerz(type, player) {
  $.each(RobotGame.Robotz, (key, value) => {
    if (key === type) {
      // console.log("happy")
      $playerChosen = (new value());
      if (player === 'player1') {
        $playerChosen.setName($('#player1-name').val());
        player1 = $playerChosen;
      } else if (player === 'player2') {
        $playerChosen.setName($('#player2-name').val());
        player2 = $playerChosen;
      } else {
        console.log("no player selected");
      }
      console.log("playerChosen", $playerChosen);
    }
  });
}
//***function(s) - creates player 1 & 2////WORKING****


//***function(s) - populates the main 3 divs of the page with stats and end result of battle////WORKING****
function populateBattlePageP1() {
  $('#playerHp').html(`<div id="stat__name"><h1>${player1.name}</h1></div>
       <div class="stat__font" id="stat__class"><span>Your Position is <strong>${player1.gameName}</strong></span></div>
       <div class="stat__font" id="stat__health"><span>You Have <strong>${player1.life}</strong> HP</span></div>
       <div class="stat__font" id="stat__weapon"><span>Your attack is a <strong>${player1.weapon}</strong></span></div>`);
}

function populateBattlePageP2() {
  $('#enemyHp').html(`<div id="stat__name"><h1>${player2.name}</h1></div>
       <div class="stat__font" id="stat__class"><span>Your Position is <strong>${player2.gameName}</strong></span></div>
       <div class="stat__font" id="stat__health"><span>You Have <strong>${player2.life}</strong> HP</span></div>
       <div class="stat__font" id="stat__weapon"><span>Your attack is a <strong>${player2.weapon}</strong></span></div>`);
}
//***function(s) - populates the main 3 divs of the page with stats and end result of battle////WORKING****
//****eventListener - attack button////WORKING****
$("#attack_button").click((event) => {
  event.preventDefault();
  if (player2.life > 0 && player1.life > 0) {
    player1.attack(player2, player1);
  }
  if (player1.life > 0 && player2.life > 0) {
    player2.attack(player1, player2);
  }
    populateBattlePageP1($pstatus1, player1, $positionChosen1);
    populateBattlePageP2($pstatus1, player2, $positionChosen1);
});
// ***********
//****eventListener - attack button////WORKING****