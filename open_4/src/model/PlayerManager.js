import { Console } from '@woowacourse/mission-utils';
import Player from './Player.js';
import Validate from './Validate.js';
class PlayerManager {
  #players;

  constructor() {
    this.#players = [];
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
    ); // 안 온 사람이 한명이라도 있을경우 true
    if (isAnyoneAbsent) {
      let searchPlayer = this.#players.find(
        (p) => p.getName() === playerName && p.getHorseName() === horseName,
      );

      if (searchPlayer)
        searchPlayer.checkIn(); // 검사 통과해서 true 로 변함
      else {
        Console.print(
          `${playerName} 선수(${horseName} 말)를 찾을 수 없거나, 정보가 일치하지 않아 출석에 실패했습니다.`,
        );
      }
    }
    const CurrentCheckAbsent = this.#players.some(
      (p) => p.getIsPresent() === false,
    ); // 안 온 사람이 한명이라도 있을경우 ture

    if (!CurrentCheckAbsent) {
      Console.print(`모든 선수가 출석이 완료되었습니다.`);
      Console.print('');

      return true;
    } else return false;
  }

  getAllPlayerInfo() {
    if (this.#players.length === 0) {
      return '현재 출석한 선수가 아무도 없습니다.';
    }
    const playerInfoStrings = this.#players.map((player) => {
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
