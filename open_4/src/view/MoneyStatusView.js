import { Console } from '@woowacourse/mission-utils';
class MoneyStatusView {
  static printBettingTotals(betTypeData) {
    Console.print(betTypeData.getTotal());
  }
}

export default MoneyStatusView;
