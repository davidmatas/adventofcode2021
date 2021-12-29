export enum CommandDirection {
  forward = 'forward',
  up = 'up',
  down = 'down'
}

export class Command {
  constructor(private direction: CommandDirection, private value: number) {}

  private getDirection() {
    return this.direction;
  }

  getValue() {
    return this.value;
  }

  isForward() {
    return this.getDirection() === CommandDirection.forward;
  }

  isDown() {
    return this.getDirection() === CommandDirection.down;
  }

  isUp() {
    return this.getDirection() === CommandDirection.up;
  }
}
