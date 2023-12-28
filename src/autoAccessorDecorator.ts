export function autolog<This, ValueType extends number>(
  accessor: ClassAccessorDecoratorTarget<This, ValueType>,
  context: ClassAccessorDecoratorContext<This, ValueType>,
): ClassAccessorDecoratorResult<This, ValueType> {
  const autoAccessorName = JSON.stringify(context.name);

  return {
    get() {
      const result = accessor.get.apply(this);
      console.log(`Auto-accessor ${autoAccessorName} get returned ${result}`);
      return result;
    },
    set(value) {
      console.log(`Auto-accessor ${autoAccessorName} set to ${value}`);
      return accessor.set.call(this, value);
    },
    init(value) {
      console.log(`Auto-accessor initialized to ${value}`);
      return value;
    },
  };
}
