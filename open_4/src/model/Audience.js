class Audience {
  #name;
  #omr;
  #refundTarget; // 환불대상자
  #winning = false;
  #prizeMoney = 0;

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
  getHorse() {
    return this.#omr.getselectHorse();
  }
  setWinnig(isWin) {
    return (this.#winning = isWin);
  }
  getWinning() {
    return this.#winning;
  }
  calculatePrizeMoney(money) {
    return (this.#prizeMoney = money);
  }
  getMoney() {
    return {
      name: this.#name,
      money: this.#prizeMoney,
      winning: this.#winning,
    };
  }
}
export default Audience;
