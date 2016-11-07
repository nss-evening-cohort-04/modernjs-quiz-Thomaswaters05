"use strict";
var RobotGame = (function(baseWeaponFunction) {

  //if you want to seperate the weapon from main object --> See below:
  // baseWeaponFunction.Weapons = {};
  // baseWeaponFunction.Weapons.Barehands = function() {
  //   this.name = "bare hands";
  //   this.damage = 1;
  //   this.hands = 2;
  //   this.toString = function() {
  //     return this.name;
  //   };
  // };
  // baseWeaponFunction.Weapons.tackle = function() {
  //   this.name = "brutal tackle";
  //   this.damage = 6;
  //   this.hands = 4;
  // };
  // baseWeaponFunction.Weapons.tackle.prototype = new baseWeaponFunction.Weapons.Barehands();
  // baseWeaponFunction.Weapons.stiffArm = function() {
  //   this.name = "stiff arm";
  //   this.damage = 12;
  //   this.hands = 3;
  // };
  // baseWeaponFunction.Weapons.stiffArm.prototype = new baseWeaponFunction.Weapons.Barehands();
  // baseWeaponFunction.Weapons.spinJuke = function() {
  //   this.name = "juke em";
  //   this.damage = 18;
  //   this.hands = 5;
  // };
  // baseWeaponFunction.Weapons.spinJuke.prototype = new baseWeaponFunction.Weapons.Barehands();
  return baseWeaponFunction;
}(RobotGame || {}));