import { Bit } from './Bit';

export class BitsCollection {
  private values: Map<'0' | '1', number>;

  constructor() {
    this.values = new Map([['0', 0], ['1', 0]]);
  }

  set(bit: Bit) {
    this.values.set(bit.getValue(), this.values.get(bit.getValue())! + 1);
  }

  get(bit: string) {
    return this.values.get(bit as '0' | '1');
  }

  getValues() {
    return this.values.values();
  }
}
