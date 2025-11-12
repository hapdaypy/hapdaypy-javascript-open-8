import { MissionUtils } from "@woowacourse/mission-utils";

class MoneyManager {
  static checkEntranceFee(entranceFee) {
    const entranceFeeNumber = Number(entranceFee);
    if (entranceFeeNumber >= 2000) return true;
    else if (entranceFeeNumber < 2000) return false;
  }
}
/*
예외케이스
1. 
*/
export default MoneyManager;
