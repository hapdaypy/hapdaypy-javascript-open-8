import audience from './Audience.js';

class AudienceManager {
  #audiences;
  constructor() {
    this.#audiences = [];
  }
  addNewAudience(audienceName, Omr) {
    const newAudience = new audience(audienceName, Omr);
    this.#audiences.push(newAudience);
  }
  getAllAudienceInfo() {
    const audienceInputString = this.#audiences.map((audience) => {
      // 문자열로 만들어줌
      const name = audience.getName();
      const { methodOfWinning, betAmount, selectHorse } = audience.getOmr();
      return `이름: ${name}, 승식: ${methodOfWinning}, 베팅금 :${betAmount}, 선택한 말 :${selectHorse}`;
    });
    return audienceInputString.join('\n');
  }
  getAllMoney() {
    const audienceInputString = this.#audiences.map((audience) => {
      const name = audience.getName();
      const { methodOfWinning, betAmount, selectHorse } = audience.getOmr();
      const result = audience.getMoney();
      return `이름: ${name}, 승식: ${methodOfWinning}, 베팅금: ${betAmount}, 선택한 말: ${selectHorse}, 수익: ${result}`;
    });
    return audienceInputString.join('\n');
  }
  getAudience() {
    return this.#audiences;
  }
}

export default AudienceManager;
