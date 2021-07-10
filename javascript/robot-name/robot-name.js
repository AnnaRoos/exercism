export class Robot {
  static robotNames = new Set();
  #name = this.createName();

  static releaseNames() {
    Robot.robotNames.clear();
    return; 
  }

  get name() {
    return this.#name;
  }

  createName() {
    let newName = '';

    for (let i = 0; i < 2; i++) {
      newName += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    for (let i = 0; i < 3; i++) {
      newName += Math.floor(Math.random() * 10);
    }

    if (Robot.robotNames.has(newName)) {
      return setImmediate(() => this.createName());
    } else {
      Robot.robotNames.add(newName);
      return newName;
    }
  }

  reset() {
    this.#name = this.createName();
    return;
  }
}


