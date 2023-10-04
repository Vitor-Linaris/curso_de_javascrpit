const Character = require("./Character");

class Warrior extends Character {
  constructor(name, lifePts, attackPts, defensePts, shieldPts) {
    super(name, lifePts, attackPts, defensePts);
    this.shieldPts = shieldPts;
    this.position = "attack";
  }

  changePosition() {
    if (this.position === "attack") {
      this.position = "defense";
      this.defensePts += this.shieldPts;
    } else {
      this.position = "attack";
      this.defensePts -= this.shieldPts;
    }
  }

  attack(targetCharacter) {
    if (this.position === "attack") {
      super.attack(targetCharacter);
    }
  }
}

module.exports = Warrior;
