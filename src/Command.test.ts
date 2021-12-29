import { Command } from './Command';

describe('Command', () => {
  it('returns the value', () => {
    const command = new Command(Command.forward, 5);

    expect(command.getValue()).toEqual(5)
  })
})


