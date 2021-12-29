export class Measurements {
  private constructor(private measurements: Array<number>) { }

  static build(list: Array<number>): Measurements {
    list = [...list];
    return new Measurements(list);
  }

  static buildWithWindows(list: Array<number>): Measurements {
    list = [...list];
    const windowSize = 3;
    const windowsList = list.reduce<Array<Array<number>>>((prev, value, i, measurements) => {
      if (measurements.length - i < windowSize) {
        measurements.splice(1); // break the reduce
      } else {
        prev.push([value, measurements[i + 1], measurements[i + 2]]);
      }

      return prev;
    }, []);

    const measurements = this.sumWindowsValues(windowsList);
    return new Measurements(measurements);
  }

  private static sumWindowsValues(groups: Array<Array<number>>): number[] {
    return groups.map(group => group.reduce((prev, value) => prev + value));
  }

  values() {
    return this.measurements;
  }
}
