type Config = {
  label?: string;
};

export function time<This, Args extends any[], Result extends string | number>(
  method: (This, Args) => Result,
  context: ClassMethodDecoratorContext<This, (This, Args) => Result>,
) {
  const methodName = JSON.stringify(context.name);

  return function (this: This, ...args: Args): Result {
    const start = performance.now();

    console.log(`${methodName} started`);

    const result = method.apply(this, args);

    const duration = (performance.now() - start).toFixed(2);

    console.log(`${methodName} ended ${duration} ms`);

    return result;
  };
}

/**
 * Factory function
 */
export function factoryTime(config?: Config) {
  // Decorator function
  return function <This, Args extends any[], Result extends string | number>(
    method: (This, Args) => Result,
    context: ClassMethodDecoratorContext<This, (This, Args) => Result>,
  ) {
    const { label } = config ?? {};
    const methodName = label ?? JSON.stringify(context.name);

    // Replacement method
    return function (this: This, ...args: Args): Result {
      const start = performance.now();

      console.log(`${methodName} started`);

      const result = method.apply(this, args);

      const duration = (performance.now() - start).toFixed(2);

      console.log(`${methodName} ended ${duration} ms`);

      return result;
    };
  };
}
