export class Bit {
  static one = '1';
  static zero = '0';
  constructor(private value: '0' | '1') { }

  getValue() {
    return this.value;
  }
}
