"use strict";

var RobotGame = (function(baseRoboFunction){

  baseRoboFunction.Robotz = {};

  //Create a base function for robot/player

   baseRoboFunction.Robotz.Player = function(name) {
    this.class = null;
    this.weapon = null;

    this.PlayerName = name || "Robo Dude";
    this.health = Math.floor(Math.random() * 30 + 100);
    this.strength = 75;
   };
});