import { SonarSweep } from './SonarSweep';
import { Measurements } from "./Measurements";

describe('SonarSweep', () => {
  it('calculates how many a measurement is increased than before', () => {
    const measurementsList = [
      199,
      200,
      208,
      210,
      200,
      207,
      240,
      269,
      260,
      263,
    ];

    const measurements = Measurements.build(measurementsList);
    const sonarSweep = new SonarSweep(measurements);
    const increasements = sonarSweep.getDeepMeasureIncrements();

    expect(increasements).toBe(7)
  });

  it('calculates how many a measurements is increasing using measurements windows', () => {
    const measurementsList = [
      199,
      200,
      208,
      210,
      200,
      207,
      240,
      269,
      260,
      263,
    ];

    const measurements = Measurements.buildWithWindows(measurementsList);
    const sonarSweep = new SonarSweep(measurements);
    const increasements = sonarSweep.getDeepMeasureIncrements();

    expect(increasements).toStrictEqual(5)
  })
})


