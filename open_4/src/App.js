import { Console } from "@woowacourse/mission-utils";
import PlayerAttendenceInput from "./view/PlayerAttendenceInput.js";
import AudienceInformationInput from "./view/AudienceInformationInput.js";
import RacingStart from "./model/Racing.js";
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

    // 경기를 진행 시킴
    // const accidentVictim = accidentOccurred();
    const race = new RacingStart();
    await race.run(playerInput); //
    playerInput.print();

    /*
    run 이라는 매세더를 호출하게 됨
    */

    // 경기 종료 후 정산
    // adjustmentMoney(accidentVictim);

    // 최종 결과 진행
    // resultPublished();
  }
}

export default App;
