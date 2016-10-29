"use strict";

var RobotGame = (function(playerFunction) {

playerFunction.Combatants = {};

 /*
    Define the base object for any player of this game.
   */
  playerFunction.Combatants.Player = function(name) {
    this.class = null;
    this.weapon = null;

    this.playerName = name || "unknown adventurer";
    this.health = Math.floor(Math.random() * 40 + 100);
    this.strength = 90;
    this.intelligence = 90;
  };


   playerFunction.Combatants.Player.prototype.setWeapon = function(newWeapon) {
    this.weapon = newWeapon;
  };

   playerFunction.Combatants.Player.prototype.setClass = function(newClass) {
    this.class = newClass;
  };

  playerFunction.Combatants.Player.prototype.player1Attack = function(target){
    this.totalDamage = Math.floor(Math.random() * 10) + 5 + this.weapon.damage;
    target.health -= this.totalDamage;

    };

 playerFunction.Combatants.Player.prototype.player2Attack = function(target){
    this.totalDamage = Math.floor(Math.random() * 10) + 5 + this.weapon.damage;
    target.health -= this.totalDamage; //***THIS MAY NOT WORK!!! - SEE ORC SETUP IF NOT IN APP.JS GAUNTLET

    };
    // $('#combat').html(`<h4>${player1.playerName} attacks ${"player2.playerName"} with a ${player1.weapon.name} and scores ${this.totalDamage} hit points.`);

    console.log("Player1totalDamage",this.totalDamage);

     playerFunction.Combatants.Player.prototype.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new RobotGame.Robotz[randomClass]();

    // Add the health bonus
    this.health += this.class.healthBonus;
    return this.class;
  };


return playerFunction;
} (RobotGame || {}));
