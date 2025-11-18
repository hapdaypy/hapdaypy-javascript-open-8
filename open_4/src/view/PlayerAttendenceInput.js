import { Console } from '@woowacourse/mission-utils';
import PlayerManager from '../model/PlayerManager.js';
import Validate from '../model/Validate.js';
class PlayerAndHorseInput {
  constructor() {
    this.playerList = new PlayerManager(); // 호출해서 실질적으로 배열을 만들게 됨-> 배열 생성
    // playerManager 를 호출함으로써 배열로 관리하는 클래스 호출 후 -> 하나의 배열을 생성하게 됨
  }
  async collectPlayers() {
    // 사용자 사전 입력
    while (true) {
      try {
        const playerAndHorse = await Console.readLineAsync(
          '선수와 말을 입력해주세요. 종료를 원한다면 0을 입력해주세요\n',
        );
        if (playerAndHorse === '0') break;

        const parts = playerAndHorse.split(',').map((item) => item.trim());
        Validate.validatePairFormat(parts);
        const [player, horse] = parts;
        Validate.inputPlayer(player, horse);
        this.playerList.addNewPlayer(player, horse);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async AttendenceCheckPlayers() {
    // 출석 여부를 관리함
    while (true) {
      try {
        const attendencePlayerAndHorse = await Console.readLineAsync(
          '경기장에 도착한 선수와 말을 입력해주세요. 종료를 원한다면 0을 입력해주세요.\n',
        );
        if (attendencePlayerAndHorse === '0') break;
        const [player, horse] = attendencePlayerAndHorse
          .split(',')
          .map((item) => item.trim());
        Validate.inputPlayer(player, horse); // 이력 형식이 맞는지 확인하는 코드
        const checkOut = this.playerList.makeAttendence(player, horse);

        if (checkOut) break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  isEveryoneAbsent() {
    for (const player of this.playerList.getPlayers()) {
      if (player.getIsPresent() === true) {
        // 출석한 사람이 존재
        return false;
      }
    }
    Console.print('참가 선수가 아무도 없어 경기를 종료합니다.');
    return true;
  }

  print() {
    Console.print('<<선수 출석 명단>>');
    Console.print(this.playerList.getAllPlayerInfo());
  }

  getPlayerAttendenceListReturn() {
    return this.playerList;
  }
}

export default PlayerAndHorseInput;
