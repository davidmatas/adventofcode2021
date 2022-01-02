import { DiagnosticReport } from './DiagnosticReport';
import { undent } from './utils';

describe('DiagnosticReport', () => {
  it('calculates the rates', () => {
    const diagnosticString = undent(`
      00100
      11110
      10110
      10111
      10101
      01111
      00111
      11100
      10000
      11001
      00010
      01010
    `);

    const diagnosticReport = new DiagnosticReport(diagnosticString);

    expect(diagnosticReport.getPowerConsumption()).toEqual(198);
    expect(diagnosticReport.getLifeSupport()).toEqual(230);
  })
})



