// ***NO LONGER USING THIS FOR MASTERY EXCERCISE BUT KEEPING FOR FUTURE REFERENCE***

// "use strict";
// var RobotGame = (function(basePlayer) {
//   basePlayer.Combatants = {};
//   /*
//      Define the base object for any player of this game.
//     */
//   basePlayer.Combatants.Player = function(name) {
//     this.class = null;
//     this.weapon = null;
//     this.name = name || "unknown adventurer";
//     this.life = 100;
//     this.health = Math.floor(Math.random() * 40 + 100);
//     this.strength = 90;
//     this.intelligence = 90;
//   };
//   basePlayer.Combatants.Player.prototype.setWeapon = function(newWeapon) {
//     this.weapon = newWeapon;
//   };
//   basePlayer.Combatants.Player.prototype.setClass = function(newClass) {
//     this.class = newClass;
//   };
//   basePlayer.Combatants.Player.prototype.player1Attack = function(target) {
//     this.totalDamage = Math.floor(Math.random() * 10) + 5 + this.weapon.damage;
//     target.health -= this.totalDamage;
//   };
//   basePlayer.Combatants.Player.prototype.player2Attack = function(target) {
//     this.totalDamage = Math.floor(Math.random() * 10) + 5 + this.weapon.damage;
//     target.health -= this.totalDamage; //***THIS MAY NOT WORK!!! - SEE ORC SETUP IF NOT IN APP.JS GAUNTLET
//     console.log("Player1totalDamage", this.totalDamage);
//   };
//   // $('#combat').html(`<h4>${player1.playerName} attacks ${"player2.playerName"} with a ${player1.weapon.name} and scores ${this.totalDamage} hit points.`);
//   basePlayer.Combatants.Player.prototype.generateClass = function() {
//     // Get a random index from the allowed classes array
//     var random = Math.round(Math.random() * (this.allowedClasses.length - 1));
//     // Get the string at the index
//     var randomClass = this.allowedClasses[random];
//     // Composes the corresponding player class into the player object
//     this.class = new RobotGame.Robotz[randomClass]();
//     // Add the health bonus
//     this.health += this.class.healthBonus;
//     return this.class;
//   };
//   return basePlayer;
// }(RobotGame || {}));