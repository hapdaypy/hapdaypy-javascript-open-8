import { Console } from '@woowacourse/mission-utils';
import Player from './Player.js';
import Validate from './Validate.js';
class PlayerManager {
  // 플레이서 리스트를 관리하는 클래스
  #players;

  constructor() {
    this.#players = []; // 배열 전체를 가리킴 -> 이 부분이 핵심, 배열처럼 관리할 수 있음
  }

  addNewPlayer(playerName, horseName) {
    const isDuplicatePlayer = this.#players.find(
      (p) => p.getName() == playerName,
    );
    const isDuplicateHourse = this.#players.find(
      (p) => p.getHorseName() === horseName,
    );
    Validate.validateDuplicatePlayerAndHours(
      isDuplicatePlayer,
      isDuplicateHourse,
    );
    const newPlayer = new Player(playerName, horseName);
    this.#players.push(newPlayer);
  }

  makeAttendence(playerName, horseName) {
    const isAnyoneAbsent = this.#players.some(
      (p) => p.getIsPresent() === false,
    ); // 안 온 사람이 한명이라도 있을경우 ture

    if (isAnyoneAbsent) {
      let searchPlayer = this.#players.find(
        (p) => p.getName() === playerName && p.getHorseName() === horseName,
      );

      if (searchPlayer)
        searchPlayer.checkIn(); // 검사 통과해서 true 로 변하는 거 잖슴
      else {
        Console.print(
          `[ERROR] ${playerName} 선수(${horseName} 말)를 찾을 수 없거나, 정보가 일치하지 않아 출석에 실패했습니다.`,
        );
      }
    }
    const CurrentCheckAbsent = this.#players.some(
      (p) => p.getIsPresent() === false,
    ); // 안 온 사람이 한명이라도 있을경우 ture

    if (!CurrentCheckAbsent) {
      Console.print(`모든 선수가 출석이 완료되었습니다.`);
      return true;
    } else return false;
  }
  getAllPlayerInfo() {
    // 11월 16일 출석 여부에 따라서 출력해야함 ... 출석여부를 확인해야해
    if (this.#players.length === 0) {
      return '현재 출석한 선수가 아무도 없습니다.';
    }
    const playerInfoStrings = this.#players.map((player) => {
      // 문자열로 만들어줌
      const isPresent = player.getIsPresent();
      const name = player.getName();
      const horse = player.getHorseName();

      if (!isPresent) {
        return `선수: ${name}, 말: ${horse} : 결석`;
      } else {
        return `선수: ${name}, 말: ${horse} : 출석`;
      }
    });

    return playerInfoStrings.join('\n');
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
