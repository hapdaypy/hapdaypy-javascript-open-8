class Omr {
  #methodOfWinning;
  #betAmount;
  #selectHorse;

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
}

export default Omr;
