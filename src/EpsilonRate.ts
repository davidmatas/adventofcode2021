import { PositionBits } from './PositionBits';
import { Rate } from './Rate';

export class EpsilonRate extends Rate {
  private static rule() {
    return (positionBits: PositionBits) => {
      if (positionBits.values.get('0')! < positionBits.values.get('1')!)
        return 0;
      else
        return 1;
    };
  }
  constructor(rateBits: Array<PositionBits>) {
    super(rateBits, EpsilonRate.rule());

  }
}
