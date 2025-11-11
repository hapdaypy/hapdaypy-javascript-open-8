import { MissionUtils } from "@woowacourse/mission-utils";

class player {
  #name;
  #horseName;
  #isPresent = false;
  #record;

  constructor(name, horseName) {
    this.#name = name;
    this.#horseName = horseName;
    this.#isPresent = false;
    this.#record = "";
  }

  checkIn() {
    this.#isPresent = true;
    MissionUtils.Console.print(`${this.#name} 출석 완료`);
  }

  get name() {
    return this.#name;
  }
  get horseName() {
    return this.#horseName;
  }

  getInfo() {
    return {
      name: this.#name,
      horse: this.#horseName,
      present: this.#isPresent,
    };
  }
}

export default player;
