import { MissionUtils } from "@woowacourse/mission-utils";

class MoneyManager {
  static checkEntranceFee(entranceFee) {
    const entranceFeeNumber = Number(entranceFee);
    if (entranceFeeNumber >= 2000) return true;
    else if (entranceFeeNumber < 2000) return false;
  }

  calculateTotalBets(audienceInput, betType) {
    const audienceManager = audienceInput.getAudienceListReturn();
    const audienceArray = audienceManager.getAudience(); // 이용자 배열 생성

    for (let index = 0; index < audienceArray.length; index++) {
      betType.addBet(
        // OMR 에 저장되어 있는 승식과, 베팅금액이 나오게 됨
        audienceArray[index].getBettingType(),
        audienceArray[index].getBettingMoney()
      );
    }
  }
}

/*
예외케이스
1. 
*/
export default MoneyManager;
