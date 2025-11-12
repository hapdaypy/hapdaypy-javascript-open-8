class audience {
  #name;
  #omr;
  #refundTarget; // 환불대상자

  constructor(name, omr) {
    this.#name = name;
    this.#omr = omr;
  }

  getInfo() {
    return {
      name: this.#name,
      omr: this.#omr.getInfoOmr(),
    };
  }
}
export default audience;
