import { Measurements } from './Measurements';

describe('Measurements', () => {
  it('build Measurements from a list', () => {
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

    expect(measurements.values()).toStrictEqual(measurementsList)
  });

  it('build a 3 window measurements from a list', () => {
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

    expect(measurements.values()).toStrictEqual([607,618,618,617,647,716,769,792])
  });
})
