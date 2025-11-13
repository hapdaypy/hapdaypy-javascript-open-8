import { Console } from "@woowacourse/mission-utils";
import PlayerManager from "../model/PlayerManager.js";

class PlayerAndHourseInput {
  constructor() {
    this.playerAttendenceList = new PlayerManager(); // 호출해서 실질적으로 배열을 만들게 됨-> 배열 생성
    // playerManager 를 호출함으로써 배열로 관리하는 클래스 호출 후 -> 하나의 배열을 생성하게 됨
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

  getPlayerAttendenceListReturn() {
    return this.playerAttendenceList;
  }
}

export default PlayerAndHourseInput;
