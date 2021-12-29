import { SonarSweep } from '../src/SonarSweep';
import { Measurements } from '../src/Measurements';
import { readFile } from 'fs/promises';
import path from 'path';

const promise = readFile(path.resolve(__dirname, './1.txt'), { encoding: 'utf-8'});

promise.then((result) => {
  const measurementsList = result.split('\n').map(line => Number(line));
  const measurements = Measurements.build(measurementsList);
  const measurementsInWindows = Measurements.buildWithWindows(measurementsList);

  console.log('Measure increments', new SonarSweep(measurements).getDeepMeasureIncrements())
  console.log('Measure increments in windows', new SonarSweep(measurementsInWindows).getDeepMeasureIncrements())
})



