import { Submarine } from '../src/Submarine';
import { readFile } from 'fs/promises';
import path from 'path';

const promise = readFile(path.resolve(__dirname, './3.txt'), { encoding: 'utf-8'});

promise.then((result) => {
  const submarine = new Submarine();
  submarine.generateDiagnosticReport(result);

  console.log('Consumption is ', submarine.powerConsumption())
})
