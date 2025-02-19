import { Circle } from "./Circle";
import { CompoundGraphic } from "./CompoundGraphic";
import { Dot } from "./Dot";

class CompositePattern {
  static main(): void {
    const compoundGraphic = new CompoundGraphic();
    compoundGraphic.add(new Circle(2,4,5));
    compoundGraphic.add(new Circle(5,3,4));
    compoundGraphic.add(new Dot(6,7));
    compoundGraphic.add(new Dot(7,8));
    compoundGraphic.move(1,1);
    compoundGraphic.draw();
  }
}

CompositePattern.main();