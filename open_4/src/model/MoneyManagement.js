import { Console } from '@woowacourse/mission-utils';
import WinningCalculator from './IsWinningBetCalculation.js';

class MoneyManager {
  static TWO_THOUSAND = 2000;

  static checkEntranceFee(entranceFee) {
    const entranceFeeNumber = Number(entranceFee);
    if (entranceFeeNumber >= MoneyManager.TWO_THOUSAND) {
      const change = entranceFee - MoneyManager.TWO_THOUSAND;
      Console.print(`잔돈은 ${change}원입니다.`);
      Console.print('');
      return true;
    } else if (entranceFeeNumber < MoneyManager.TWO_THOUSAND) {
      Console.print(`입장료는 2000원입니다.`);
      Console.print('');

      return false;
    }
  }

  calculateTotalBets(audienceInput, betType) {
    const audienceManager = audienceInput.getAudienceListReturn();
    const audienceArray = audienceManager.getAudience(); // 이용자 배열 생성

    for (let index = 0; index < audienceArray.length; index++) {
      betType.addBet(
        // OMR 에 저장되어 있는 승식과, 베팅금액이 나오게 됨
        audienceArray[index].getBettingType(),
        audienceArray[index].getBettingMoney(),
      );
    }
  }

  winningPoolCalculation(betType, audienceInput, finalRanking) {
    const audienceManager = audienceInput.getAudienceListReturn();
    const audienceArray = audienceManager.getAudience();
    for (let index = 0; index < audienceArray.length; index++) {
      const koreanType = audienceArray[index].getBettingType();
      const englishType = this.translateBetType(koreanType);
      const audienceHorse = audienceArray[index].getHorse().split(',');
      const isCorrect = WinningCalculator.isWinning(
        englishType,
        audienceHorse,
        finalRanking,
      );
      if (isCorrect === true) {
        // 정답일 경우
        audienceArray[index].setWinnig(true);
        betType.addWinnigPool(
          englishType,
          audienceArray[index].getBettingMoney(),
        );
        // audience 베팅 성공 표시
      } else if (isCorrect === false) {
        // 베팅 실패 표시
      }
    }
  }

  payoutRatCalculation(betType) {
    // 배당률을 구하는 코드
    const betTypeKeys = ['win', 'place', 'quinella', 'exacta'];
    for (const key of betTypeKeys) {
      const total = betType.getTotalElement(key);
      const winningPool = betType.getWinning(key);
      let payoutRate = 0;
      if (winningPool > 0) {
        payoutRate = total / winningPool;
      }
      betType.setPayout(key, payoutRate);
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

  settleBets(betType, audienceInput) {
    const audienceManager = audienceInput.getAudienceListReturn();
    const audienceArray = audienceManager.getAudience(); // 사람들을 관리하는 배열 생성
    for (const audience of audienceArray) {
      if (audience.getWinning() === true) {
        const koreanType = audience.getBettingType();
        const englishType = this.translateBetType(koreanType);
        const payoutRate = betType.getPayoutRate(englishType);
        const money = payoutRate * audience.getBettingMoney();
        audience.calculatePrizeMoney(Math.floor(money));
      }
    }
  }
}

export default MoneyManager;
