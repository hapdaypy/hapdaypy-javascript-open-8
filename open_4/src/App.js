import PlayerAttendenceInput from "./view/PlayerAttendenceInput.js";
import AudienceInformationInput from "./view/AudienceInformationInput.js";
import RacingStart from "./model/Racing.js";
import BetTypeManager from "./model/BetTypeManager.js";
import MoneyManager from "./model/MoneyManagement.js";
import MoneyStatusView from "./view/MoneyStatusView.js";
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
    const betType = new BetTypeManager();
    const moneymanager = new MoneyManager();
    moneymanager.calculateTotalBets(audienceInput, betType);
    MoneyStatusView.printBettingTotals(betType.getTotal());

    //경 기 를 진 행 시 킴
    const race = new RacingStart();
    await race.run(playerInput); //
    playerInput.print();
    /*ui 기능을 분리하기 위한 나의 노력*/

    // 경기 종료 후 정산

    // 최종 결과 진행
  }
}

export default App;
