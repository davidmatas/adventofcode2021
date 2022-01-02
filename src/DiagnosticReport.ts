import { DiagnosticMatrix } from './DiagnosticMatrix';
import { LifeSupport } from './LifeSupport';
import { PowerConsumption } from './PowerConsumption';

export class DiagnosticReport {
  private diagnosticMatrix: DiagnosticMatrix;
  private powerConsumption: PowerConsumption;
  private lifeSupport: LifeSupport;

  constructor(diagnostic: string) {
    this.diagnosticMatrix = this.parseDiagnosticString(diagnostic);
    this.powerConsumption = new PowerConsumption(this.diagnosticMatrix);
    this.lifeSupport = new LifeSupport(this.diagnosticMatrix);
  }

  private parseDiagnosticString(diagnosticString: string) {
    return DiagnosticMatrix.buildFromString(diagnosticString)
  }

  getPowerConsumption(): number {
    return this.powerConsumption.value();
  }

  getLifeSupport(): number {
    return this.lifeSupport.value();
  }
}


