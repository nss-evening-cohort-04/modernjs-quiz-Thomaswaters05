"use strict";

// //ADD A BASE ROBOT/FOOTBALL PLAYER FUNCTION
var RobotGame = (function(positionRobots){

  positionRobots.Robotz = {};

   positionRobots.Robotz.PlayerClass = function() {
    this.name = "Mariota";
    this.healthBonus = 0;
    this.strengthBonus = 0;
    this.intelligenceBonus = 0;

    this.toString = function() {
    return this.name;
  };


    //CREATE THREE POSITIONS/TYPES: OFFENSE / DEFENSE / SPECIAL TEAMS

    //1st Position: Offense
      // - Quarterback
      // - Runningback
      // - WideReceiver
positionRobots.Robotz.Offense = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
positionRobots.Robotz.Offense.prototype = new RobotGame.Robotz.PlayerClass();

positionRobots.Robotz.Quarterback = function() {
  this.name = "Quarterback";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
positionRobots.Robotz.Quarterback.prototype = new positionRobots.Robotz.Offense();


positionRobots.Robotz.Runningback = function() {
  this.name = "Runningback";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
positionRobots.Robotz.Runningback.prototype = new positionRobots.Robotz.Offense();


positionRobots.Robotz.WideReceiver = function() {
  this.name = "WideReceiver";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
};
positionRobots.Robotz.WideReceiver.prototype = new positionRobots.Robotz.Offense();


    //2nd Position: Defense
      // - Linebacker
      // - Corner
positionRobots.Robotz.Defense = function() {
  this.name = "Defense";
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;};
};
positionRobots.Robotz.Defense.prototype = new positionRobots.Robotz.PlayerClass();

positionRobots.Robotz.Linebacker = function() {
  this.name = "Linebacker";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
positionRobots.Robotz.Linebacker.prototype = new positionRobots.Robotz.Defense();

positionRobots.Robotz.Corner = function() {
  this.name = "Corner";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
positionRobots.Robotz.Corner.prototype = new positionRobots.Robotz.Defense();

    //3rd Position: Special Teams
      // - Kicker
positionRobots.Robotz.SpecialTeams = function() {
  this.name = "SpecialTeams";
  this.healthBonus = 30;
  this.strengthBonus = 5;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
positionRobots.Robotz.SpecialTeams.prototype = new RobotGame.Robotz.PlayerClass();

positionRobots.Robotz.Kicker = function() {
  this.name = "Kicker";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus + 20;
  this.intelligenceBonus = this.intelligenceBonus + 15;
};
positionRobots.Robotz.Kicker.prototype = new positionRobots.Robotz.SpecialTeams();



return positionRobots;
} (RobotGame || {}));

