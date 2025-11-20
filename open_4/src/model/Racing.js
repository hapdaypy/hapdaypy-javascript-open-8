import { MissionUtils } from '@woowacourse/mission-utils';

class RacingStart {
  #racingRanking;
  static TWENTY_FIVE = 25;
  constructor() {
    this.#racingRanking = [];
  }

  async run(playerInput, outputView) {
    const playerManager = playerInput.getPlayerAttendenceListReturn();
    const playerArray = playerManager.getPlayers();
    const playerNumber = playerArray.length;
    MissionUtils.Console.print('<<경기 시작!>>');
    MissionUtils.Console.print('');
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
        playerArray[index].getRecord(),
      );

      if (!validateStop && referenceValue >= RacingStart.TWENTY_FIVE) {
        playerArray[index].addRecord();
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
    if (record.length === 5 && !isAlreadyRanked) {
      this.#racingRanking.push(player.getHorseName());
    }
  }
}

export default RacingStart;
