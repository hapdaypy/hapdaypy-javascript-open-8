import { MissionUtils } from '@woowacourse/mission-utils';

class Player {
  #name;
  #horseName;
  #isPresent = false;
  #record;

  constructor(name, horseName) {
    this.#name = name;
    this.#horseName = horseName;
    this.#isPresent = false;
    this.#record = '';
  }

  checkIn() {
    this.#isPresent = true;
    MissionUtils.Console.print(`${this.#name} 출석 완료`);
    MissionUtils.Console.print('');
  }

  getInfo() {
    return {
      name: this.#name,
      horse: this.#horseName,
      present: this.#isPresent,
      racingRecord: this.#record,
    };
  }

  addRecord() {
    this.#record += '-';
  }

  getRecord() {
    return this.#record;
  }
  getName() {
    return this.#name;
  }
  getHorseName() {
    return this.#horseName;
  }
  getIsPresent() {
    return this.#isPresent;
  }
}

export default Player;
