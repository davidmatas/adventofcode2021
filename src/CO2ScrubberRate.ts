import { DiagnosticMatrix } from './DiagnosticMatrix';


export class CO2ScrubberRate {
  private columns: number;
  private value: any;
  constructor(private diagnosticMatrix: DiagnosticMatrix) {
    this.columns = this.diagnosticMatrix.getValue()[0].length;
    this.value = this.calculateRate();
  }
  private calculateRate(): any {
    let position = 0;
    let diagnosticMatrix = this.diagnosticMatrix;
    while (position < this.columns) {
      const commonBit = diagnosticMatrix.getLeastCommonBitForPosition(position);
      const diagnosticMatrixFiltered = diagnosticMatrix.getValue().filter((row) => {
        return row[position].getValue() === commonBit;
      });
      diagnosticMatrix = DiagnosticMatrix.buildFromDiagnosticMatrixValue(diagnosticMatrixFiltered);
      if (diagnosticMatrixFiltered.length === 1)
        break;
      position++;
    }

    return diagnosticMatrix.getValue().map(row => {
      return row.map(bit => bit.getValue()).join('');
    }).join();
  }

  getValue() {
    return this.value;
  }

  getDecimalValue() {
    return parseInt(this.value, 2);
  }
}
