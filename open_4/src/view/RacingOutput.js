import { Console } from '@woowacourse/mission-utils';

class RacingOutput {
  static printRacingView(playerArray) {
    for (const player of playerArray) {
      Console.print(`${player.getHorseName()} : ${player.getRecord()}`);
    }
    Console.print('');
  }
  static printRank(rankArray) {
    rankArray.forEach((player, index) => {
      Console.print(`${index + 1}등: ${player}`);
    });
  }
}
export default RacingOutput;
