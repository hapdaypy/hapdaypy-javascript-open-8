class Audience {
  #name;
  #omr;
  #refundTarget; // 환불대상자

  constructor(name, omr) {
    this.#name = name;
    this.#omr = omr;
  }

  getInfo() {
    return {
      name: this.#name,
      omr: this.#omr.getInfoOmr(),
    };
  }

  getBettingType() {
    return this.#omr.getMethodOfWinning();
  }

  getBettingMoney() {
    return this.#omr.getBetAmount();
  }
}
export default Audience;
