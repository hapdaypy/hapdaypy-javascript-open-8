import { MissionUtils } from "@woowacourse/mission-utils";

class RacingStart {
  #racingRanking;
  static TWENTY_FIVE = 25;
  constructor() {
    this.#racingRanking = [];
  }

  async run(playerInput, outputView) {
    const playerManager = playerInput.getPlayerAttendenceListReturn();
    const playerArray = playerManager.getPlayers();
    const playerNumber = playerArray.length; //  배열의 길이

    while (this.#racingRanking.length !== playerArray.length) {
      this.RaceController(playerArray, playerNumber);
      outputView.printRacingView(playerArray);
    }

    return this.#racingRanking;
  }

  RaceController(playerArray, playerNumber) {
    for (let index = 0; index < playerNumber; index++) {
      const referenceValue = this.makeRandomValue();

      const validateStop = this.validateDistanceRecord(
        playerArray[index].getRecord()
      );

      if (!validateStop && referenceValue >= RacingStart.TWENTY_FIVE) {
        playerArray[index].addRecord(); // player라는 클래스에 접근함
        this.determineRanks(playerArray[index].getRecord(), playerArray[index]);
      }
    }
  }

  makeRandomValue() {
    return MissionUtils.Random.pickNumberInRange(1, 45);
  }
  validateDistanceRecord(record) {
    if (record.length === 5) return true;
    return false;
  }

  determineRanks(record, player) {
    const isAlreadyRanked = this.#racingRanking.includes(player);
    if ((record.length === 5) != isAlreadyRanked) {
      this.#racingRanking.push(player);
    }
  }
}

export default RacingStart;

/*

먼저 5칸을 들어오는 말이 이기는 거임

말을 전진시킬 때마다 출력을 해야함 

도착한 말은 더이상 recording 되지 않음
----- 가 5개가 나와야함 



*/
