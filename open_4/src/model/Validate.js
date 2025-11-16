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
}
export default Validate;
