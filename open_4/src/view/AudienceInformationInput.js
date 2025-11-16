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
    for (let index = 0; index < 2; index++) {
      const entranceFee = await Console.readLineAsync('입장료를 내주세요.\n');
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


*/
