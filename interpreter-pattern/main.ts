import { ComplexExpression } from './ComplexExpression';
import { Context } from './context';
import { SimpleExpression } from './SimpleExpression';

class InterpretorPattern {
  static main(): void {
    const context = new Context();
    context.put('a', 1);
    context.put('b', 2);
    context.put('c', 3);
    context.put('d', 4);
    const expression = new ComplexExpression(new SimpleExpression('a'), new SimpleExpression('b'));
    expression.interpret(context);
    console.log(expression.interpret(context));
  }
}

InterpretorPattern.main();