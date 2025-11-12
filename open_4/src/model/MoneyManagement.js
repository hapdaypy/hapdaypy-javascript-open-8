import { MissionUtils } from "@woowacourse/mission-utils";

class moneyManager {
  checkEntranceFee(entranceFee) {
    if (entranceFee === 2000) return true;
    else if (entranceFee !== 2000) return false;
  }
}

export default moneyManager;
