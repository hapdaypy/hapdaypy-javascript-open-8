const _isWin = (betHorses, finalRanking) => {
  const horseToWin = betHorses[0];
  const firstPlaceHorse = finalRanking[0];
  return horseToWin === firstPlaceHorse;
};

const _isPlace = (betHorses, finalRanking) => {
  const horseToPlace = betHorses[0];
  const topThree = finalRanking.slice(0, 3);
  return topThree.includes(horseToPlace);
};

const _isQuinella = (betHorses, finalRanking) => {
  const [horseA, horseB] = betHorses;
  const topTwo = finalRanking.slice(0, 2);
  return topTwo.includes(horseA) && topTwo.includes(horseB);
};

const _isExacta = (betHorses, finalRanking) => {
  const [firstPick, secondPick] = betHorses;
  const firstPlaceHorse = finalRanking[0];
  const secondPlaceHorse = finalRanking[1];
  return firstPick === firstPlaceHorse && secondPick === secondPlaceHorse;
};

const _isSwinger = (betHorses, finalRanking) => {
  const [horseA, horseB] = betHorses;
  const topThree = finalRanking.slice(0, 3);
  return topThree.includes(horseA) && topThree.includes(horseB);
};

const _isTrio = (betHorses, finalRanking) => {
  const [horseA, horseB, horseC] = betHorses;
  const topThree = finalRanking.slice(0, 3);
  return (
    topThree.includes(horseA) &&
    topThree.includes(horseB) &&
    topThree.includes(horseC)
  );
};

const WINNING_LOGIC_MAP = {
  win: _isWin,
  place: _isPlace,
  quinella: _isQuinella,
  exacta: _isExacta,
  swinger: _isSwinger,
  trio: _isTrio,
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
