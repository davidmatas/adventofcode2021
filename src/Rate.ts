import { PositionBits } from './PositionBits';

export abstract class Rate {
  private value: string;

  constructor(rateBits: Array<PositionBits>, rule: (bit: PositionBits) => 0 | 1) {
    this.value = rateBits.map(rule).join('');
  }

  getValue() {
    return this.value;
  }

  decimalValue() {
    return parseInt(this.value, 2);
  }
}
