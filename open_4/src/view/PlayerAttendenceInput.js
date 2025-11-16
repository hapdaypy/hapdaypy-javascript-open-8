import { Console } from '@woowacourse/mission-utils';
import PlayerManager from '../model/PlayerManager.js';
import Validate from '../model/Validate.js';
class PlayerAndHorseInput {
  constructor() {
    this.playerAttendenceList = new PlayerManager(); // 호출해서 실질적으로 배열을 만들게 됨-> 배열 생성
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

        const [player, horse] = playerAndHorse
          .split(',')
          .map((item) => item.trim());
        Validate.inputPlayer(player, horse);
        this.playerAttendenceList.addNewPlayer(player, horse);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async AttendenceCheckPlayers() {
    while (true) {
      try {
        const attendencePlayerAndHorse = await Console.readLineAsync(
          '경기장에 도착한 선수와 말을 입력해주세요.\n',
        );
        const [player, horse] = attendencePlayerAndHorse
          .split(',')
          .map((item) => item.trim());
        /*
          이것도 validate 에 입력 형!!식!! 만 보고

          makeattedence 에서 해당 내용을 확인해보자.
          1. 해당 말은 선수 명단에 없습니다. 
          2. 말과 선수가 일치하지 않습니다. 
          3. 

          
          
          
          */
        this.playerAttendenceList.makeAttendence(player, horse);
        /*
        이것도 출력 예쁘게 하자 
        참석자 
        불참자 
        나눠서 출력 예쁘게 만들어보자 
        
        */
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  print() {
    Console.print('\n<<선수 출석 명단>>');
    Console.print(this.playerAttendenceList.getAllPlayerInfo());
  }

  getPlayerAttendenceListReturn() {
    return this.playerAttendenceList;
  }
}

export default PlayerAndHorseInput;
