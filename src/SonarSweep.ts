import { Measurements } from './Measurements';

export class SonarSweep {
  constructor(private measurements: Measurements) { }

  getDeepMeasureIncrements() {
    let increments = 0;
    this.measurements.values().reduce((prev, value) => {
      if (prev < value) increments += 1;
      return value;
    });
    return increments;
  }
}
