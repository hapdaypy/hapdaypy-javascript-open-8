import { Console } from "@woowacourse/mission-utils";
import Player from "./Player.js";

class PlayerManager {
  #players;

  constructor() {
    this.#players = [];
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
}

export default PlayerManager;
