class Validate {
  static nameOnlyRegex = /[^a-zA-Z가-힣]/;
  static numberOnlyRegex = /[^0-9]/;

  static inputPlayer(player, horse) {
    if (this.nameOnlyRegex.test(player)) {
      throw new Error(
        '[Error] 선수 이름에 오직 한글 또는 영어만 있어야합니다.',
      );
    }
    if (this.nameOnlyRegex.test(horse)) {
      throw new Error('[Error] 말 이름에 오직 한글 또는 영어만 있어야합니다.');
    }
  }

  static validateDuplicatePlayerAndHours(player, horse) {
    if (player && horse)
      throw new Error('[Error] 선수 이름과 말 이름이 중복됩니다.');
    else if (player) throw new Error('[Error] 중복되는 선수 이름입니다.');
    else if (horse) throw new Error('[Error] 중복되는 말 이름입니다.');
  }

  static validatePairFormat(parts) {
    if (parts.length !== 2) {
      throw new Error(
        '[Error] 입력 형식이 올바르지 않습니다. "선수,말" 형식으로 쉼표 1개만 사용해주세요.',
      );
    }
  }
  static MoneyInput(entranceFee) {
    if (this.numberOnlyRegex.test(entranceFee)) {
      throw new Error('[Error] 입장금에는 숫자만 기입해주세요.');
    }
  }

  static nameInput(name) {
    if (this.nameOnlyRegex.test(name)) {
      throw new Error('[Error] 이름에 오직 한글 또는 영어만 있어야합니다.');
    }
  }
  static omrInput(method, bettingAmount, selectHourse, playerInput) {
    this.validateMethod(method, selectHourse);
    this.validateBettingAmount(bettingAmount);
    this.validateSelectHourse(selectHourse, playerInput);
  }

  static validateMethod(method, selectHourse) {
    const validMethods = ['단승', '연승', '복승', '쌍승'];
    if (!validMethods.includes(method)) {
      throw new Error(
        `[Error] 유효하지 않은 승식입니다: ${method}. (단승, 연승, 복승, 쌍승 중 하나여야 합니다)`,
      );
    }
    const horseArray = selectHourse.split(',');

    if ('단승' == method || '연승' === method) {
      if (horseArray.length !== 1) {
        throw new Error('단승 또는 연승에는 한마리의 말이 있어야 합니다.');
      }
    }
    if ('복승' == method || '쌍승' === method) {
      if (horseArray.length !== 2) {
        throw new Error('복승 또는 쌍승에는 한마리의 말이 있어야 합니다.');
      }
    }
  }
  static validateBettingAmount(bettingAmount) {
    if (this.numberOnlyRegex.test(bettingAmount)) {
      throw new Error('[Error] 베팅 금액에는 숫자만 기입해주세요.');
    }
    if (Number(bettingAmount) < 1000) {
      throw new Error('[Error] 베팅 금액은 1000원 이상이어야 합니다.');
    }
    if (Number(bettingAmount) % 1000 !== 0) {
      throw new Error('[Error] 베팅 금액은 1000원 단위여야 합니다.');
      Console.print('');
    }
  }
  static validateSelectHourse(selectHourse, playerInput) {
    const playerManager = playerInput.getPlayerAttendenceListReturn();
    const playerArray = playerManager.getPlayers();

    const horseToPlayerMap = new Map();
    for (const player of playerArray) {
      horseToPlayerMap.set(player.getHorseName(), player);
    }
    const selectedHorses = selectHourse.split(',').map((h) => h.trim());

    for (const horseName of selectedHorses) {
      if (!horseToPlayerMap.has(horseName)) {
        throw new Error(
          `[Error] ${horseName} (은)는 출전 선수 명단에 없는 말입니다`,
        );
      }
      const player = horseToPlayerMap.get(horseName);
      if (!player.getIsPresent()) {
        throw new Error(
          `[Error] '${horseName}' 말의 선수(${player.getName()})는 아직 출석하지 않았습니다.`,
        );
      }
    }
  }
}

export default Validate;
