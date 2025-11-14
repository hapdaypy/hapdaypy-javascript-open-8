import { MissionUtils } from '@woowacourse/mission-utils';

class Omr {
  // OMR 을 관리하는 클래스

  #methodOfWinning; // 승식
  #betAmount;
  #selectHorse;
  #accidentStatus = false;

  constructor(methodOfWinning, betAmount, selectHourse) {
    this.#methodOfWinning = methodOfWinning;
    this.#betAmount = Number(betAmount);
    this.#selectHorse = selectHourse;
  }

  getInfoOmr() {
    return {
      methodOfWinning: this.#methodOfWinning,
      betAmount: this.#betAmount,
      selectHorse: this.#selectHorse,
    };
  }
  getMethodOfWinning() {
    return this.#methodOfWinning;
  }

  getBetAmount() {
    return this.#betAmount;
  }

  getselectHorse() {
    return this.#selectHorse;
  }

  // 형식이 다 맞게 되었는지 검사해야함
}

export default Omr;
