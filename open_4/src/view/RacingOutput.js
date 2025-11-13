import { Console } from '@woowacourse/mission-utils';

class RacingOutput {
  static printRacingView(playerArray) {
    for (const player of playerArray) {
      Console.print(`${player.getName()} : ${player.getRecord()}`);
    }
    Console.print('');
  }
  static printRank(rankArray) {
    rankArray.forEach((player, index) => {
      Console.print(`${index + 1}등: ${player.getName()}`);
    });
  }
}
export default RacingOutput;
