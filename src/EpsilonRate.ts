import { Bit } from './Bit';
import { BitsCollection } from './BitsCollection';
import { Rate } from './Rate';

export class EpsilonRate extends Rate {
  private static rule() {
    return (positionBits: BitsCollection) => {
      if (positionBits.get(Bit.zero)! < positionBits.get(Bit.one)!)
        return Bit.zero;
      else
        return Bit.one;
    };
  }
  constructor(rateBits: Array<BitsCollection>) {
    super(rateBits, EpsilonRate.rule());

  }
}
