export default class ExchangeService {
  constructor(side1, side2) {
    this.side1 = side1;
    this.side2 = side2;
  }

  getArea() {
    return this.side1 * this.side2;
  }
}