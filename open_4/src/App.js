import PlayerAttendenceInput from './view/PlayerAttendenceView.js';
import AudienceInformationInput from './view/AudienceInformationView.js';
import RacingStart from './model/Racing.js';
import BetTypeManager from './model/BetTypeManager.js';
import MoneyManager from './model/MoneyManagement.js';
import MoneyStatusView from './view/MoneyStatusView.js';
import RacingView from './view/RacingView.js';

class App {
  async run() {
    // 1. 선수 입장 및 출석 체크
    const playerInput = await this.#recruitPlayers();
    if (!playerInput) return; // 모두 결석 시 종료

    // 2. 관객 입장
    const audienceInput = await this.#admitAudience(playerInput);

    // 3. 베팅 시스템 준비 (승식, 자금 관리자 생성)
    const { betType, moneyManager } = this.#prepareBetting(audienceInput);

    // 4. 경기 진행
    const finalRanking = await this.#startRace(playerInput);

    // 5. 최종 정산 및 결과 출력
    this.#settleGame(moneyManager, betType, audienceInput, finalRanking);
  }

  // [1] 선수들을 입장시키고 출석 결과를 확인하는 메서드
  async #recruitPlayers() {
    const playerInput = new PlayerAttendenceInput();
    await playerInput.collectPlayers();
    if (playerInput.checkPlayerNumber()) {
      return null;
    }

    await playerInput.AttendenceCheckPlayers();
    if (playerInput.isEveryoneAbsent()) {
      return null; // 모두 결석했다는 신호(null) 반환
    }

    playerInput.print();
    return playerInput;
  }

  // [2] 관객들을 입장시키는 메서드
  async #admitAudience(playerInput) {
    const audienceInput = new AudienceInformationInput();
    await audienceInput.collecAudience(playerInput);
    audienceInput.printAudience();
    return audienceInput;
  }

  // [3] 승식별 베팅 금액을 계산하고 매니저 객체들을 반환하는 메서드
  #prepareBetting(audienceInput) {
    const betType = new BetTypeManager();
    const moneyManager = new MoneyManager();

    moneyManager.calculateTotalBets(audienceInput, betType);
    MoneyStatusView.printBettingTotals(betType);

    return { betType, moneyManager };
  }

  // [4] 경기를 진행하고 순위를 반환하는 메서드
  async #startRace(playerInput) {
    const raceManager = new RacingStart();
    const finalRanking = await raceManager.run(playerInput, RacingView);
    RacingView.printRank(finalRanking);
    return finalRanking;
  }

  // [5] 경기 종료 후 정산하고 결과를 출력하는 메서드
  #settleGame(moneyManager, betType, audienceInput, finalRanking) {
    // 당첨금 풀 계산
    moneyManager.winningPoolCalculation(betType, audienceInput, finalRanking);
    // 배당률 계산
    moneyManager.payoutRatCalculation(betType, audienceInput);
    // 개별 관객 정산
    moneyManager.settleBets(betType, audienceInput);
    // 최종 결과 출력
    audienceInput.printGetMoney();
  }
}

export default App;
