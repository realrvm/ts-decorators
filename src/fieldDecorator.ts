export function double<This, FieldType extends number>(
  notused: any,
  context: ClassFieldDecoratorContext<This, FieldType>,
) {
  return function (initialValue: FieldType) {
    return initialValue * 2;
  };
}
