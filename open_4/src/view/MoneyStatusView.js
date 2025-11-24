import { Console } from '@woowacourse/mission-utils';
class MoneyStatusView {
  static printBettingTotals(betTypeData) {
    Console.print(betTypeData.getTotal());
    Console.print('');
  }
}

export default MoneyStatusView;
