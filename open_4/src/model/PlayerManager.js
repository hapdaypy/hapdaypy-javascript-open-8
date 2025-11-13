import { Console } from "@woowacourse/mission-utils";
import Player from "./Player.js";

class PlayerManager {
  // 플레이서 리스트를 관리하는 클래스
  #players;

  constructor() {
    this.#players = []; // 배열 전체를 가리킴 -> 이 부분이 핵심, 배열처럼 관리할 수 있음
  }

  addNewPlayer(playerName, horseName) {
    const newPlayer = new Player(playerName, horseName);
    this.#players.push(newPlayer);
  }

  makeAttendence(playerName, horseName) {
    let searchPlayer = this.#players.find(
      (p) => p.name === playerName && p.horseName === horseName
    );
    if (searchPlayer) searchPlayer.checkIn();
    else {
      Console.print(`${playerName}은 출석하지 못했습니다.`);
    }
  }
  getAllPlayerInfo() {
    return this.#players.map((p) => p.getInfo());
  }

  getPlayers() {
    return this.#players;
  }
}

export default PlayerManager;
/*
1. 기능 : 선수들을 관리 -> 진짜 사람을 관리하는 기능 : 개인개인에게 값을 전달 / 사람 찾기
- player 와 hourse 를 추가함
- 출석을 관찰함

- 경기 종료후 각 인원별로 호출해서 경기 결과를 설정하도록 도와줌
player 클래스를 호출해서 순위를 전달해줌

- 사고가 발생한 말을 찾아서 따로 표시를 해줌
*/
