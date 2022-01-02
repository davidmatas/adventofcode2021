import { Command } from './Command';
import { DiagnosticReport } from './DiagnosticReport';

export class Submarine {
  private horizontalPosition: number;
  private depth: number;
  private aim: number;
  private diagnosticReport?: DiagnosticReport;

  constructor() {
    this.horizontalPosition = 0;
    this.depth = 0;
    this.aim = 0;
    this.diagnosticReport = undefined
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

  private increaseAim(value: number) {
    this.aim += value;
  }

  private decreaseAim(value: number) {
    this.aim -= value;
  }

  private increaseDepthWithAim(value: number) {
    this.depth += this.aim * value;
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

  powerConsumption(): number {
    return this.diagnosticReport!.getPowerConsumption()
  }

  lifeSupport(): number {
    return this.diagnosticReport!.getLifeSupport()
  }

  generateDiagnosticReport(diagnosticReport: string) {
    this.diagnosticReport = new DiagnosticReport(diagnosticReport);
  }
}


