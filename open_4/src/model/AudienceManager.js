import audience from "./Audience.js";

class AudienceManager {
  #audiences;

  constructor() {
    this.#audiences = []; // 배열 전체를 가리킴 -> 이 부분이 핵심, 배열처럼 관리할 수 있음
  }

  addNewAudience(audienceName, Omr) {
    const newAudience = new audience(audienceName, Omr);
    this.#audiences.push(newAudience); // 배열에
  }

  getAllAudienceInfo() {
    return this.#audiences.map((p) => p.getInfo());
  }
}

export default AudienceManager;

/*
사람을 관리하는 클래스 : 정말 관객들을 관리해줘야함

1. 사람들별로 omr을 작성성 시킴
-> omr 클래스에서 작성(omr클래스) -> 한 사람이 가져야할 omr에 저장 : add를 통해서 전달

## 한 사람이 가져야할 정보 
이름 
OMR 

### OMR이 가져야할 정보 
승식ㅉ
베팅금액
승식에 따른 말 입력 받아야함

*/
