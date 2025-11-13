import PlayerAttendenceInput from './view/PlayerAttendenceInput.js';
import AudienceInformationInput from './view/AudienceInformationInput.js';
import RacingStart from './model/Racing.js';
import BetTypeManager from './model/BetTypeManager.js';
import MoneyManager from './model/MoneyManagement.js';
import MoneyStatusView from './view/MoneyStatusView.js';
import RacingOutput from './view/RacingOutput.js';
class App {
  async run() {
    // 선수들을 입장시키고 출석 결과 확인하기
    const playerInput = new PlayerAttendenceInput(); // 새로운 배열을 만들겠다고 호출
    await playerInput.collecPlayers();
    await playerInput.AttendenceCheckPlayers();
    playerInput.print();

    // 관 객 들 을 입 장 시 킴.
    const audienceInput = new AudienceInformationInput(); // 사용 자들을 만들겠다고 호출
    await audienceInput.collecAudience();
    audienceInput.print();

    //승 식 별 로 베 팅 금 액 을 계산
    const betType = new BetTypeManager(); // 승식이 저장되어 있는 캡슐 하나
    const moneymanager = new MoneyManager();
    moneymanager.calculateTotalBets(audienceInput, betType);
    MoneyStatusView.printBettingTotals(betType.getTotal());

    //경 기 를 진 행 시 킴
    const raceManager = new RacingStart();
    const finalRanking = await raceManager.run(playerInput, RacingOutput); // 배열을 변수에 저장
    playerInput.print();
    RacingOutput.printRank(finalRanking);

    // 경 기 종 료 후 정 산
    moneymanager.payoutCalculation(betType, audienceInput, finalRanking);
    // 최종 결과 진행
  }
}

export default App;
