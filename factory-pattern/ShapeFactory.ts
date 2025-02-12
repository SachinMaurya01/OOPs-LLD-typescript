import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Shape } from './interfaces/Shape';

export class ShapeFactory {
  getShape(shapeType: string): Shape|null {
    if(shapeType === 'CIRCLE') {
      let obj = new Circle();
      obj.draw();
      return obj;
    }

    else if(shapeType === 'RECTANGLE') {
      let obj = new Rectangle();
      obj.draw();
      return obj;
    }
    else{
      return null;
    }
  }
}