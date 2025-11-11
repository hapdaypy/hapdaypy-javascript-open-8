import { Console } from "@woowacourse/mission-utils";
import PlayerManager from "../model/PlayerManager.js";

class PlayerAndHourseInput {
  constructor() {
    this.playerAttendenceList = new PlayerManager();
  }

  async collecPlayers() {
    // 사용자 사전 입력

    for (let index = 0; index < 2; index++) {
      const playerAndHorse = await Console.readLineAsync(
        "선수와 말을 입력해주세요.\n"
      );
      const [player, horse] = playerAndHorse
        .split(",")
        .map((item) => item.trim());

      this.playerAttendenceList.addNewPlayer(player, horse);
    }
  }

  async AttendenceCheckPlayers() {
    for (let index = 0; index < 2; index++) {
      const attendencePlayerAndHorse = await Console.readLineAsync(
        "경기장에 도착한 선수와 말을 입력해주세요.\n"
      );
      const [player, horse] = attendencePlayerAndHorse
        .split(",")
        .map((item) => item.trim());
      this.playerAttendenceList.makeAttendence(player, horse);
    }
  }

  print() {
    Console.print(this.playerAttendenceList.getAllPlayerInfo());
  }
}

export default PlayerAndHourseInput;
