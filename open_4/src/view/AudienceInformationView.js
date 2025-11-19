import { Console } from '@woowacourse/mission-utils';
import AudienceManager from '../model/AudienceManager.js';
import MoneyManager from '../model/MoneyManagement.js';
import Omr from '../model/Omr.js';
import Validate from '../model/Validate.js';

class PlayerAndHourseInput {
  constructor() {
    this.audienceList = new AudienceManager(); // 배열을 생성
  }
  async collecAudience(playerInput) {
    // 사용자 이름, Omr 클래스를 집어 넣음

    while (true) {
      try {
        const entranceFee = await Console.readLineAsync(
          '입장료를 내주세요. 종료를 원한다면 STOP를 입력해주세요!\n',
        );
        if (entranceFee === 'STOP') break;
        Validate.MoneyInput(entranceFee);
        const entryResult = MoneyManager.checkEntranceFee(entranceFee);
        if (entryResult === true) {
          const { audienceName, audienceOmrClass } =
            await this.#collectAudienceDetails(playerInput);
          this.audienceList.addNewAudience(audienceName, audienceOmrClass);
        }
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #collectAudienceDetails(playerInput) {
    while (true) {
      try {
        const audienceName =
          await Console.readLineAsync('관객의 이름을 입력해주세요.\n');
        Validate.nameInput(audienceName);
        const audienceOmrString = await Console.readLineAsync(
          'OMR을 작성해주세요. 승식/베팅금/선택한 말 순으로 기입해주세요\n',
        ); // Omr은 승식, 베팅금, 선택한 말 순서로 입력 받음
        const omrSplit = audienceOmrString.split('/');
        const [method, bettingAmount, selectHourse] = omrSplit;
        Validate.omrInput(method, bettingAmount, selectHourse, playerInput); // omr 을 검증하는 기능.
        // 모 든 검 증 이 통 과 된 깨 끗 한 관 객 과 O M R
        const audienceOmrClass = new Omr(method, bettingAmount, selectHourse);
        return { audienceName, audienceOmrClass };
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  printAudience() {
    Console.print(this.audienceList.getAllAudienceInfo());
    Console.print('');
  }
  printGetMoney() {
    Console.print(this.audienceList.getAllMoney());
  }
  getAudienceListReturn() {
    return this.audienceList;
  }
}

export default PlayerAndHourseInput;
/*
11월 16일 

Omr validate 
1) 승식 별로 말이 몇 마리 필요한지 확인해야함
6) 츌석한 사 람 만 출력 해야하는데 지금 다 출력하고 있음
7) 승식별로 돈을 모으긴 하는데 출석하지 ㅎ않아서 선수권이 박탈당한 사람에게 돈을 걸면 안 되는거임 

moneymanager 
2) 아니 근데 승식별로 돈 계산이 안 되는거야 ?

audience 
5) 출석 여부 확인 할 때, 선수들 전부 출석하면 강제로 종료해주는 거 만들어야함 


*/
