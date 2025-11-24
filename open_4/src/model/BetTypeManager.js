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
    const convertAmount = Number(amount);
    const typeKey = this.translateBetType(koreanType);
    if (typeKey in this.#totals) {
      this.#totals[typeKey] += convertAmount;
    }
  }

  addWinnigPool(typeKey, amount) {
    // 승리풀
    if (typeKey in this.#winningBetPool) {
      const convertAmount = Number(amount);
      this.#winningBetPool[typeKey] += convertAmount;
    }
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
    const { win, place, quinella, exacta } = this.#totals;
    return `
[총 배팅 금액 현황]
- 단승: ${win}원
- 연승: ${place}원
- 복승: ${quinella}원
- 쌍승: ${exacta}원
  `.trim();
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
