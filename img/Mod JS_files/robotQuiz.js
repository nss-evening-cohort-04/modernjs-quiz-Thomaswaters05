"use strict";

// //ADD A BASE ROBOT/FOOTBALL PLAYER FUNCTION
var RobotGame = (function(baseRobotFunction){

  baseRobotFunction.Robotz = {};

   baseRobotFunction.Robotz.Player = function(name) {
    this.PlayerName = name || "Robo Dude";
    this.position = null;
    this.weapon = null;
    this.life = 100;
    this.baseDamage = Math.floor(Math.random() * 30 + 100);

   };

   baseRobotFunction.Robotz.Player.prototype.setWeapon = function(newWeapon) {
    this.weapon = newWeapon;
   };

   baseRobotFunction.Robotz.Player.setName = function(newName) {
    this.name = newName;
   };

     baseRobotFunction.Robotz.Player.prototype.setPosition = function(newClass) {
    this.class = newClass;
   };

    baseRobotFunction.Robotz.Player.player1Attack = function(target) {
    this.totalDamage = this.totalDamage = Math.floor(Math.random() * 10) + 5 + this.weapon.damage;
    target.health -= this.totalDamage;
// ***THIS NEEDS TO BE CHANGED**// $('#combat').html(`<h4>${player1.playerName} attacks ${orc.enemyName} with a ${player1.weapon.name} and scores ${this.totalDamage} hit points.`);
    console.log("Player1totalDamage",this.totalDamage);
    };

    //CREATE THREE POSITIONS/TYPES: OFFENSE / DEFENSE / SPECIAL TEAMS

    //1st Position: Offense



    //2nd Position: Defense




    //3rd Position: Special Teams





});

