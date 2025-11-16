class Validate {
  static numberOnlyRegex = /[^a-zA-Z가-힣]/;

  static inputPlayer(player, horse) {
    if (this.numberOnlyRegex.test(player)) {
      throw new Error(
        '[Error] 선수 이름에 오직 한글 또는 영어만 있어야합니다.',
      );
    }
    if (this.numberOnlyRegex.test(horse)) {
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
}
export default Validate;
