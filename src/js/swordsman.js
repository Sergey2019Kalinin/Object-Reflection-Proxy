import Character from "./domain";

class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");

    this.attack = 40;
    this.defence = 10;
  }
}

export default Swordsman;