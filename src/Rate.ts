import { BitsCollection } from './BitsCollection';

export abstract class Rate {
  private value: string;

  constructor(rateBits: Array<BitsCollection>, rule: (bit: BitsCollection) => string) {
    this.value = rateBits.map(rule).join('');
  }

  getValue() {
    return this.value;
  }

  decimalValue() {
    return parseInt(this.value, 2);
  }
}
