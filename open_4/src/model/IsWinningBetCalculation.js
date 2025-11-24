const isWin = (betHorses, finalRanking) => {
  const horseToWin = betHorses[0];
  const firstPlaceHorse = finalRanking[0];
  return horseToWin === firstPlaceHorse;
};

const isPlace = (betHorses, finalRanking) => {
  const horseToPlace = betHorses[0];
  const topThree = finalRanking.slice(0, 3);
  return topThree.includes(horseToPlace);
};

const isQuinella = (betHorses, finalRanking) => {
  const [horseA, horseB] = betHorses;
  const topTwo = finalRanking.slice(0, 2);
  return topTwo.includes(horseA) && topTwo.includes(horseB);
};

const isExact = (betHorses, finalRanking) => {
  const [firstPick, secondPick] = betHorses;
  const firstPlaceHorse = finalRanking[0];
  const secondPlaceHorse = finalRanking[1];
  return firstPick === firstPlaceHorse && secondPick === secondPlaceHorse;
};

const WINNING_LOGIC_MAP = {
  win: isWin,
  place: isPlace,
  quinella: isQuinella,
  exacta: isExact,
};

class WinningCalculator {
  static isWinning(betTypeEng, betHorses, finalRanking) {
    const logicFunction = WINNING_LOGIC_MAP[betTypeEng];

    if (logicFunction) {
      return logicFunction(betHorses, finalRanking);
    }

    return false;
  }
}

export default WinningCalculator;
