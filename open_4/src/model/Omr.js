import { MissionUtils } from '@woowacourse/mission-utils';

class Omr {
  // OMR 을 관리하는 클래스

  #methodOfWinning; // 승식
  #betAmount;
  #selectHourse;
  #accidentStatus = false;

  constructor(methodOfWinning, betAmount, selectHourse) {
    this.#methodOfWinning = methodOfWinning;
    this.#betAmount = Number(betAmount);
    this.#selectHourse = selectHourse;
  }

  getInfoOmr() {
    return {
      methodOfWinning: this.#methodOfWinning,
      betAmount: this.#betAmount,
      selectHourse: this.#selectHourse,
    };
  }
  getMethodOfWinning() {
    return this.#methodOfWinning;
  }

  getBetAmount() {
    return this.#betAmount;
  }

  getselectHourse() {
    return this.#selectHourse;
  }

  // 형식이 다 맞게 되었는지 검사해야함
}

export default Omr;
