import { ShapeFactory } from './ShapeFactory';

class ShapeFactoryImplementation {
  shapefactory : ShapeFactory;

  constructor() {
    this.shapefactory = new ShapeFactory();
  }
  createCircle() {
    return this.shapefactory.getShape('CIRCLE');
  }
  createRectangle() {
    return this.shapefactory.getShape('RECTANGLE');
  }
}

const shapeFactoryImplementation = new ShapeFactoryImplementation();
console.log(shapeFactoryImplementation.createCircle());
console.log(shapeFactoryImplementation.createRectangle());