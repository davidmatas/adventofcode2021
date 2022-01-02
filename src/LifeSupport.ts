import { CO2ScrubberRate } from './CO2ScrubberRate';
import { DiagnosticMatrix } from './DiagnosticMatrix';
import { OxigenGeneratorRate } from './OxigenGeneratorRate';

export class LifeSupport {
  private lifeSupport: number;

  constructor(diagnosticMatrix: DiagnosticMatrix) {
    this.lifeSupport = this.calculateLifeSupport(diagnosticMatrix);
  }

  calculateLifeSupport(diagnosticMatrix: DiagnosticMatrix): number {
    const oxigenGeneratorRate = new OxigenGeneratorRate(diagnosticMatrix);
    const co2ScrubberRate = new CO2ScrubberRate(diagnosticMatrix);
    return oxigenGeneratorRate.getDecimalValue() * co2ScrubberRate.getDecimalValue();
  }

  value() {
    return this.lifeSupport;
  }
}
