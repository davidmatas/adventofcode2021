import { Bit } from './Bit';
import { BitsCollection } from './BitsCollection';

export class DiagnosticMatrix {
  static buildFromDiagnosticMatrixValue(diagnosticMatrix: Array<Array<Bit>>) {
    const diagnosticString = diagnosticMatrix.map(row => {
      const rowString = row.map(bit => bit.getValue()).join('');
      return rowString;
    }).join('\n');
    return DiagnosticMatrix.buildFromString(diagnosticString);
  }

  static buildFromString(diagnosticString: string) {
    const diagnosticMatrix = diagnosticString.split('\n').filter(line => line).map((line) => {
      return line.split('').map((value) => {
        return new Bit(value as '0' | '1');
      }) as Array<Bit>;
    });
    return new DiagnosticMatrix(diagnosticMatrix);
  }

  private constructor(private value: Array<Array<Bit>>) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  getMostCommonBitForPosition(position: number) {
    const positionBits = new BitsCollection();
    this.value.forEach(row => {
      const bit = row[position];
      positionBits.set(bit);
    });
    const [value0, value1] = positionBits.getValues();
    if (value0 > value1)
      return Bit.zero;
    else
      return Bit.one;
  }

  getLeastCommonBitForPosition(position: number) {
    const positionBits = new BitsCollection();
    this.value.forEach(row => {
      const bit = row[position];
      positionBits.set(bit);
    });
    const [value0, value1] = positionBits.getValues();
    if (value0 > value1)
      return Bit.one;
    else
      return Bit.zero;
  }
}
