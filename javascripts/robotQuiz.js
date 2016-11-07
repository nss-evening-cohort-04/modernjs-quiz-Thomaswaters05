"use strict";
// //ADD A BASE ROBOT/FOOTBALL PLAYER FUNCTION
var RobotGame = (function(robotClass) {
  robotClass.Robotz = {};
  robotClass.Robotz.PlayerClass = function() {
    console.log(robotClass.Robotz);
    this.gameName = "ROBOT";
    this.type = "null";
    this.life = 100;
    this.weapon = "null";
    this.baseDamage = Math.floor(Math.random() * 5);
  };
  robotClass.Robotz.PlayerClass.prototype.setWeapon = function(newWeapon) {
    this.weapon = newWeapon;
  };
  robotClass.Robotz.PlayerClass.prototype.setName = function(newName) {
    this.name = newName;
  };
  robotClass.Robotz.PlayerClass.prototype.setType = function(newType) {
    this.type = newType;
  };
  robotClass.Robotz.PlayerClass.prototype.attack = function(enemy, fbPlayer) {
    this.totalDamage = this.baseDamage + Math.floor(Math.random() * (10 - 1 + 1) + 20);
    enemy.life -= this.totalDamage;


      //*******


    if (enemy.life <= 0) {
      enemy.life = 0;
      $('#combat').html(`<h2>${fbPlayer.gameName} has taken down ${enemy.gameName}
         with an INSANE ${fbPlayer.weapon}!</h2>`);
    } else if (fbPlayer.life <= 0) {
      fbPlayer.life = 0;
      $('#combat').html(`<h2>${enemy.gameName}  has taken down ${fbPlayer.gameName}
          with an INSANE ${enemy.weapon}!</h2>`);
    }
  };
  //CREATE THREE POSITIONS/TYPES: OFFENSE / DEFENSE / SPECIAL TEAMS
  //1st Position: Offense
  // - Quarterback
  // - Runningback
  // - WideReceiver
  robotClass.Robotz.Offense = function() {
    this.type = "Shotgun";
    this.attackType = "Air";
  };
  robotClass.Robotz.Offense.prototype = new RobotGame.Robotz.PlayerClass();
  robotClass.Robotz.Quarterback = function() {
    this.gameName = "Quarterback";
    this.life = Math.floor(Math.random() * 10) + 10;
    this.baseDamage += 20;
    this.weapon = "Sneak-Attack";
  };
  robotClass.Robotz.Quarterback.prototype = new robotClass.Robotz.Offense();
  robotClass.Robotz.Runningback = function() {
    this.gameName = "Runningback";
    this.life = Math.floor(Math.random() * 15) + 15;
    this.baseDamage += 10;
    this.weapon = "Stiff-Arm";
  };
  robotClass.Robotz.Runningback.prototype = new robotClass.Robotz.Offense();

  robotClass.Robotz.WideReceiver = function() {
    this.gameName = "WideReceiver";
    this.life = Math.floor(Math.random() * 10) + 10;
    this.baseDamage += 15;
    this.weapon = "Spin-Juke";
  };
  robotClass.Robotz.WideReceiver.prototype = new robotClass.Robotz.Offense();

  //2nd Position: Defense
  // - Linebacker
  // - Corner
  robotClass.Robotz.Defense = function() {
    this.type = "Zone-Blitz";
    this.attackType = "Ground";
  };
  robotClass.Robotz.Defense.prototype = new RobotGame.Robotz.PlayerClass();
  robotClass.Robotz.Linebacker = function() {
    this.gameName = "Linebacker";
    this.life = Math.floor(Math.random() * 10) + 15;
    this.baseDamage += 15;
    this.weapon = "Brute-Tackle";
  };
  robotClass.Robotz.Linebacker.prototype = new robotClass.Robotz.Defense();
  robotClass.Robotz.Corner = function() {
    this.gameName = "Corner";
    this.life = Math.floor(Math.random() * 10) + 10;
    this.baseDamage += 10;
    this.weapon = "Deflection";
  };
  robotClass.Robotz.Corner.prototype = new robotClass.Robotz.Defense();


  //3rd Position: Special Teams
  // - Kicker
  robotClass.Robotz.SpecialTeams = function() {
    this.type = "Onside-Kick";
    this.attackType = "Elements";
  };
  robotClass.Robotz.SpecialTeams.prototype = new RobotGame.Robotz.PlayerClass();
  robotClass.Robotz.Kicker = function() {
    this.gameName = "Kicker";
    this.life = Math.floor(Math.random() * 10) + 20;
    this.baseDamage += 10;
    this.weapon = "Monster-Kick";
  };
  robotClass.Robotz.Kicker.prototype = new robotClass.Robotz.SpecialTeams();
  return robotClass;
}(RobotGame || {}));