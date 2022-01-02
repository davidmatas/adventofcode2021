import { DiagnosticMatrix } from './DiagnosticMatrix';

export class PowerConsumption {
  private powerConsumption: number;
  private columns: number;

  constructor(diagnosticMatrix: DiagnosticMatrix) {
    this.columns = diagnosticMatrix.getValue()[0].length;
    this.powerConsumption = this.calculatePowerConsumption(diagnosticMatrix);
  }

  private calculatePowerConsumption(diagnosticMatrix: DiagnosticMatrix): number {
    const mostCommonBits = [];
    const leastCommonBits = [];
    for (let column = 0; column < this.columns; column++) {
      const mostCommonBit = diagnosticMatrix.getMostCommonBitForPosition(column);
      const leastCommonBit = diagnosticMatrix.getLeastCommonBitForPosition(column);
      mostCommonBits.push(mostCommonBit);
      leastCommonBits.push(leastCommonBit);
    }
    return parseInt(mostCommonBits.join(''), 2) * parseInt(leastCommonBits.join(''), 2);
  }

  value() {
    return this.powerConsumption;
  }
}
