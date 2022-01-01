import { EpsilonRate } from './EpsilonRate';
import { GammaRate } from './GammaRate';
import { PositionBits } from './PositionBits';

type DiagnosticMatrix = Array<Array<'0' | '1'>>

export class DiagnosticReport {
  private diagnosticMatrix: DiagnosticMatrix;
  private gammaRate: GammaRate;
  private epsilonRate: EpsilonRate;
  private rateBits: Array<PositionBits>

  constructor(diagnostic: string) {
    this.diagnosticMatrix = this.parseDiagnosticString(diagnostic);
    this.rateBits = this.calculateRateBits();
    this.gammaRate = this.calculateGammaRate();
    this.epsilonRate = this.calculateEpsilonRate();
  }

  private parseDiagnosticString(diagnosticString: string) {
    return diagnosticString.split('\n').map((line) => {
      return line.split('') as Array<'0' | '1'>;
    });
  }

  private calculateGammaRate(): GammaRate {
    return new GammaRate(this.rateBits)
  }

  private calculateRateBits(): Array<PositionBits> {
    const rateBits = [];
    for (let column = 0; column < this.diagnosticMatrix[0].length; column++) {
      const bit = new PositionBits();
      for (let row = 0; row < this.diagnosticMatrix.length; row++) {
        bit.set(this.diagnosticMatrix[row][column]);
      }
      rateBits.push(bit)
    }
    return rateBits
  }

  private calculateEpsilonRate(): EpsilonRate {
    return new EpsilonRate(this.rateBits)
  }

  getGammaRate(): any {
    return this.gammaRate.getValue();
  }

  getGammaRateDecimal(): any {
    return this.gammaRate.decimalValue();
  }

  getEpsilonRate(): any {
    return this.epsilonRate.getValue();
  }

  getEpsilonRateDecimal(): any {
    return this.epsilonRate.decimalValue();
  }
}


