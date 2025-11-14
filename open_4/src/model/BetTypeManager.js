class BetTypeManager {
  #totals;
  #winningBetPool;
  #payoutRate;
  constructor() {
    this.#totals = {
      win: 0, // 단승
      place: 0, // 연승
      quinella: 0, // 복승
      exacta: 0, // 쌍승
    };

    this.#winningBetPool = {
      win: 0, // 단승
      place: 0, // 연승
      quinella: 0, // 복승
      exacta: 0, // 쌍승
    };

    this.#payoutRate = {
      win: 0, // 단승
      place: 0, // 연승
      quinella: 0, // 복승
      exacta: 0, // 쌍승
    };
  }

  addBet(koreanType, amount) {
    // 베팅금
    const typeKey = this.translateBetType(koreanType);
    if (typeKey in this.#totals) {
      this.#totals[typeKey] += amount;
    }
  }

  addWinnigPool(typeKey, amount) {
    // 승리풀
    if (typeKey in this.#winningBetPool) {
      this.#winningBetPool[typeKey] += amount;
    }
  }

  addPayoutRat(typeKey, winningPool) {
    this.#payoutRate[typeKey] += winningPool;
  }

  translateBetType(koreanType) {
    const typeMap = {
      단승: 'win',
      연승: 'place',
      복승: 'quinella',
      쌍승: 'exacta',
    };
    return typeMap[koreanType];
  }

  getTotal() {
    return { ...this.#totals };
  }
  getTotalElement(key) {
    return this.#totals[key];
  }
  getWinning(key) {
    return this.#winningBetPool[key];
  }
  setPayout(key, payoutRate) {
    return (this.#payoutRate[key] = payoutRate);
  }
  getPayoutRate(key) {
    return this.#payoutRate[key];
  }
}

export default BetTypeManager;
