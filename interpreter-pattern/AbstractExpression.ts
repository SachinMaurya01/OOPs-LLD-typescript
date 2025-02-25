import { Context } from './context';

export interface AbstractExpression {
  interpret(context: Context): number;
}