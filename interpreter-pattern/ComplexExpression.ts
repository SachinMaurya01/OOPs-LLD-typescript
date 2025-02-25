import { AbstractExpression } from "./AbstractExpression";
import { Context } from "./context";


export class ComplexExpression implements AbstractExpression {
  left: AbstractExpression;
  right: AbstractExpression;

  constructor(left: AbstractExpression, right: AbstractExpression) {
    this.left = left;
    this.right = right;
  }

  interpret(context: Context): number {
    return this.left.interpret(context) + this.right.interpret(context);
  }
}