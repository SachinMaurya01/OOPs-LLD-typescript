import { AbstractExpression } from './AbstractExpression';
import { Context } from './context';

export class SimpleExpression implements AbstractExpression {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  interpret(context: Context): number {
    return context.get(this.key) || 0;
  }
}