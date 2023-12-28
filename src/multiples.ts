export function message(message: string) {
  console.log(`Factory function: ${message}`);
  return function (method: any, ctx: ClassMemberDecoratorContext) {
    console.log(`Get replacement: ${message}`);
    return function (this: any, ...args: any[]) {
      console.log(`Message: ${message}`);
      return method.apply(this, args);
    };
  };
}
