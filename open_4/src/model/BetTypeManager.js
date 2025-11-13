class BetTypeManager {
  #totals;

  constructor() {
    this.#totals = {
      win: 0, // 단승
      place: 0, // 연승
      quinella: 0, // 복승
      exacta: 0, // 쌍승
    };
  }

  addBet(koreanType, amount) {
    const typeKey = this.translateBetType(koreanType);
    if (typeKey in this.#totals) {
      this.#totals[typeKey] += amount;
    }
  }

  translateBetType(koreanType) {
    const typeMap = {
      단승: "win",
      연승: "place",
      복승: "quinella",
      쌍승: "exacta",
    };
    return typeMap[koreanType];
  }

  getTotal() {
    return { ...this.#totals };
  }
}

export default BetTypeManager;
