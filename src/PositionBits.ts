export class PositionBits {
  readonly values: Map<'0' | '1', number>;

  constructor() {
    this.values = new Map([['0', 0], ['1', 0]]);
  }

  set(bit: '0' | '1') {
    this.values.set(bit, this.values.get(bit)! + 1);
  }

  get(bit: '0' | '1') {
    return this.values.get(bit);
  }
}
