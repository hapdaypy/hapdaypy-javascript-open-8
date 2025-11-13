import { MissionUtils } from "@woowacourse/mission-utils";

class RacingStart {
  static TWENTY_FIVE = 25;

  async run(playerInput) {
    const playerManager = playerInput.getPlayerAttendenceListReturn();
    const playerArray = playerManager.getPlayers();
    const playerNumber = playerArray.length; //  배열의 길이

    for (let index = 0; index < 8; index++) {
      this.RaceController(playerArray, playerNumber);
    }
  }

  makeRandomValue() {
    return MissionUtils.Random.pickNumberInRange(1, 45);
  }

  RaceController(playerArray, playerNumber) {
    for (let index = 0; index < playerNumber; index++) {
      const referenceValue = this.makeRandomValue();
      if (referenceValue >= RacingStart.TWENTY_FIVE) {
        // static 사용법

        playerArray[index].addRecord(); //  배열에 접근하는 것아 아니라 사람이라는 클래스에 접근함
      }
    }
  }
}
export default RacingStart;
