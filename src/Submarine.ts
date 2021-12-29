import { Command } from './Command';

export class Submarine {
  private horizontalPosition: number;
  private depth: number;
  private aim: number;

  constructor() {
    this.horizontalPosition = 0;
    this.depth = 0;
    this.aim = 0;
  }

  private increaseHorizontalPosition(value: number) {
    this.horizontalPosition += value;
  }

  private increaseDepth(value: number) {
    this.depth += value;
  }

  private decreaseDepth(value: number) {
    this.depth -= value;
  }

  getPosition(): any {
    return [this.horizontalPosition, this.depth];
  }

  moveLegacy(command: Command) {
    if (command.isForward()) {
      this.increaseHorizontalPosition(command.getValue());
    }

    if (command.isDown()) {
      this.increaseDepth(command.getValue());
    }

    if (command.isUp()) {
      this.decreaseDepth(command.getValue());
    }

  }

  move(command: Command) {
    if (command.isForward()) {
      this.increaseHorizontalPosition(command.getValue());
      this.increaseDepthWithAim(command.getValue());
    }

    if (command.isDown()) {
      this.increaseAim(command.getValue());
    }

    if (command.isUp()) {
      this.decreaseAim(command.getValue());
    }

  }

  forward(value: number) {
    this.increaseHorizontalPosition(value);
    this.increaseDepthWithAim(value);
  }

  down(value: number) {
    this.increaseAim(value);
  }

  up(value: number) {
    this.decreaseAim(value);
  }
  private increaseAim(value: number) {
    this.aim += value;
  }

  private decreaseAim(value: number) {
    this.aim -= value;
  }

  private increaseDepthWithAim(value: number) {
    this.depth += this.aim * value;
  }
}
