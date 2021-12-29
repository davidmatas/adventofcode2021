import { Command, CommandDirection } from './Command';
import { Submarine } from './Submarine';

describe('Submarine', () => {
  it('can move using commands', () => {
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

})


