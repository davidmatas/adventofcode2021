import { Submarine } from '../src/Submarine';
import { Command, CommandDirection } from '../src/Command';
import { readFile } from 'fs/promises';
import path from 'path';

const promise = readFile(path.resolve(__dirname, './2.txt'), { encoding: 'utf-8'});

promise.then((result) => {
  const lines = result.split('\n');
  const submarine = new Submarine();
  lines.forEach(line => {
    const [direction, value] = line.split(' ');
    const command = new Command(CommandDirection[direction as CommandDirection], Number(value));
    submarine.moveLegacy(command);
  })
  const position = submarine.getPosition()

  console.log('Position is ', position)
  console.log('Position product is ', position[0] * position[1])
})

promise.then((result) => {
  const lines = result.split('\n');
  const submarine = new Submarine();
  lines.forEach(line => {
    const [direction, value] = line.split(' ');
    const command = new Command(CommandDirection[direction as CommandDirection], Number(value));
    submarine.move(command);
  })
  const position = submarine.getPosition()

  console.log('Position using aim is ', position)
  console.log('Position product using aim is ', position[0] * position[1])
})



