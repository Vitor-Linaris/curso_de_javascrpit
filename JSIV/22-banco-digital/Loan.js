const Installment = require("./Installment");

module.exports = class Loan {
  static #fees = 1.05;

  constructor(value, installments) {
    this.value = value;
    this.installments = [];
    for (let index = 1; index <= installments; index++) {
      this.installments.push(
        new Installment((value * Loan.#fees) / installments, index)
      );
    }
    this.createdAt = new Date();
  }

  static get fee() {
    return Loan.#fees;
  }

  static set fee(newFeePercentage) {
    Loan.#fees = 1 + newFeePercentage / 100;
  }
};
