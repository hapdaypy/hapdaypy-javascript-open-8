import { MissionUtils } from '@woowacourse/mission-utils';

class Player {
  // 플래이러 한 명을 관리하는 클래스
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
  }

  get horseName() {
    return this.#horseName;
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
}

export default Player;

/*
한 사람이 가져야할 정보

이름
말
경기 결과
출석 여부

*/
