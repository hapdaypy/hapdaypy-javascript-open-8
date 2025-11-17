import { Console } from '@woowacourse/mission-utils';
import AudienceManager from '../model/AudienceManager.js';
import MoneyManager from '../model/MoneyManagement.js';
import Omr from '../model/Omr.js';
import Validate from '../model/Validate.js';

class PlayerAndHourseInput {
  constructor() {
    this.audienceList = new AudienceManager(); // 배열을 생성
  }
  async collecAudience() {
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
          const audienceNamn =
            await Console.readLineAsync('관객의 이름을 입력해주세요.\n');
          const audienceOmrString = await Console.readLineAsync(
            'OMR을 작성해주세요. 승식/베팅금/선택한 말 순으로 기입해주세요\n',
          ); // Omr은 승식, 베팅금, 선택한 말 순서로 입력 받음
          const omrSplit = audienceOmrString.split('/');
          const [method, bettingAmount, selectHourse] = omrSplit;
          const audienceOmrClass = new Omr(method, bettingAmount, selectHourse);
          this.audienceList.addNewAudience(audienceNamn, audienceOmrClass);
        }
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  print() {
    Console.print(this.audienceList.getAllAudienceInfo());
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
여기가 진짜 개 맛도리 validate 확인 하는 부분... 생각할게 제일 많음 ... 얼마나 많이 생각해야하는걸까... 이부분에 대해서 생각해보자
11월 16일 

1) 승식 별로 말이 몇 마리 필요한지 확인해야함
2) 아니 근데 승식별로 돈 계산이 안 되는거야 ?
3) 이름이 확인 형식 확인 
4) 잔돈 반환해주고
5) 출석 여부 확인 할 때, 선수들 전부 출석하면 강제로 종료해주는 거 만들어야함 
6) 츌석한 사 람 만 출력 해야하는데 지금 다 출력하고 있음

7) 승식별로 돈을 모으긴 하는데 출석하지 ㅎ않아서 선수권이 박탈당한 사람에게 돈을 걸면 안 되는거임 
사용자가 박탁된 사람, 없는 사람 고르는 경우를 만들어서 아 이 사람 고르면 안된다고 말해주는 
*/
