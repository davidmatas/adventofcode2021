import { CO2ScrubberRate } from './CO2ScrubberRate';
import { DiagnosticMatrix } from './DiagnosticMatrix';
import { EpsilonRate } from './EpsilonRate';
import { GammaRate } from './GammaRate';
import { OxigenGeneratorRate } from './OxigenGeneratorRate';
import { BitsCollection } from './BitsCollection';

export class DiagnosticReport {
  private diagnosticMatrix: DiagnosticMatrix;
  private gammaRate: GammaRate;
  private epsilonRate: EpsilonRate;
  private bitPerColumns: Array<BitsCollection>
  private columns: number;
  private oxigenGeneratorRate: OxigenGeneratorRate;
  private co2ScrubberRate: CO2ScrubberRate;

  constructor(diagnostic: string) {
    this.diagnosticMatrix = this.parseDiagnosticString(diagnostic);
    this.columns = this.diagnosticMatrix.getValue()[0].length
    this.bitPerColumns = this.countBitsPerColumns();
    this.gammaRate = this.calculateGammaRate();
    this.oxigenGeneratorRate = this.calculateOxigenGeneratorRate();
    this.epsilonRate = this.calculateEpsilonRate();
    this.co2ScrubberRate = this.calculateCo2ScrubberRate();
  }


  private parseDiagnosticString(diagnosticString: string) {
    return DiagnosticMatrix.buildFromString(diagnosticString)
  }

  private calculateGammaRate(): GammaRate {
    return new GammaRate(this.bitPerColumns)
  }

  private countBitsPerColumns(): Array<BitsCollection> {
    const bitsPerColumns = [];
    for (let column = 0; column < this.columns; column++) {
      const columnBits = new BitsCollection();
      for (let row = 0; row < this.diagnosticMatrix.getValue().length; row++) {
        columnBits.set(this.diagnosticMatrix.getValue()[row][column]);
      }
      bitsPerColumns.push(columnBits)
    }
    return bitsPerColumns
  }

  private calculateEpsilonRate(): EpsilonRate {
    return new EpsilonRate(this.bitPerColumns)
  }

  getGammaRate(): string {
    return this.gammaRate.getValue();
  }

  getGammaRateDecimal(): number {
    return this.gammaRate.decimalValue();
  }

  getEpsilonRate(): string {
    return this.epsilonRate.getValue();
  }

  getEpsilonRateDecimal(): number {
    return this.epsilonRate.decimalValue();
  }

  private calculateOxigenGeneratorRate(): OxigenGeneratorRate {
    return new OxigenGeneratorRate(this.diagnosticMatrix)
  }

  private calculateCo2ScrubberRate(): CO2ScrubberRate {
    return new CO2ScrubberRate(this.diagnosticMatrix)
  }

  getOxygenGeneratorRate(): string {
    return this.oxigenGeneratorRate.getValue();
  }

  getOxygenGeneratorRateDecimal(): number {
    return this.oxigenGeneratorRate.getDecimalValue();
  }

  getCo2ScrubberRateDecimal(): any {
    return this.co2ScrubberRate.getDecimalValue();
  }
  getCo2ScrubberRate(): any {
    return this.co2ScrubberRate.getValue();
  }
}


