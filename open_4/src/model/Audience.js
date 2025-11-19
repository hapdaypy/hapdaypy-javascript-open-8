class Audience {
  #name;
  #omr;
  #winning = false;
  #prizeMoney = 0;

  constructor(name, omr) {
    this.#name = name;
    this.#omr = omr;
  }

  getOmr() {
    return this.#omr.getInfoOmr();
  }
  getName() {
    return this.#name;
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
