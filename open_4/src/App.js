import { Console } from "@woowacourse/mission-utils";
import PlayerAndHourseInput from "./view/PlayerAttendenceInput.js";

class App {
  async run() {
    const playerInput = new PlayerAndHourseInput();
    await playerInput.collecPlayers();
    await playerInput.AttendenceCheckPlayers();
    playerInput.print();

    const audience = new audienceInput(); // OMR작성, 승식별로 총 합 계산

    const accidentVictim = accidentOccurred();
    racingStart(accidentVictim);

    adjustmentMoney(accidentVictim);

    resultPublished();
  }
}

export default App;
