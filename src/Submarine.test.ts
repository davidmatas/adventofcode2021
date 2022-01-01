import { Command, CommandDirection } from './Command';
import { Submarine } from './Submarine';
import { undent } from './utils';

describe('Submarine', () => {
  it('can move [legacy]', () => {
    const submarine = new Submarine();

    submarine.moveLegacy(new Command(CommandDirection.forward, 5));
    submarine.moveLegacy(new Command(CommandDirection.down, 5));
    submarine.moveLegacy(new Command(CommandDirection.forward, 8));
    submarine.moveLegacy(new Command(CommandDirection.up, 3));
    submarine.moveLegacy(new Command(CommandDirection.down, 8));
    submarine.moveLegacy(new Command(CommandDirection.forward, 2));

    expect(submarine.getPosition()).toStrictEqual([15, 10]);
  })

  it('can move using aim', () => {
    const submarine = new Submarine();

    submarine.move(new Command(CommandDirection.forward, 5));
    submarine.move(new Command(CommandDirection.down, 5));
    submarine.move(new Command(CommandDirection.forward, 8));
    submarine.move(new Command(CommandDirection.up, 3));
    submarine.move(new Command(CommandDirection.down, 8));
    submarine.move(new Command(CommandDirection.forward, 2));

    expect(submarine.getPosition()).toStrictEqual([15, 60]);
  })

  it('can read power consumption', () => {
    const submarine = new Submarine();

    const diagnosticReport = undent(`
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

    submarine.generateDiagnosticReport(diagnosticReport);

    expect(submarine.powerConsumption()).toBe(198)
  })

})


