export function log<This, ValueType extends number>(
  setter: (ValueType) => void,
  context: ClassSetterDecoratorContext<This, ValueType>,
): (ValueType) => void;
export function log<This, ValueType extends number>(
  getter: () => ValueType,
  context: ClassGetterDecoratorContext<This, ValueType>,
): () => ValueType;
export function log(
  accessor: any,
  context: ClassSetterDecoratorContext | ClassGetterDecoratorContext,
) {
  const accessorName = JSON.stringify(context.name);

  return function (this: any, ...args: any[]) {
    if (context.kind === "getter") {
      const result = accessor.apply(this, args);

      console.log(`${accessorName} get returned ${result}`);

      return result;
    } else {
      console.log(`${accessorName} set to ${args}`);

      return accessor.apply(this, args);
    }
  };
}
