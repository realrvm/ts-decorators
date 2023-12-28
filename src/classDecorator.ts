export function serialize<T extends new (...args: any[]) => any>(
  originalClass: T,
  context: ClassDecoratorContext,
) {
  const className = JSON.stringify(context.name);
  return class extends originalClass implements Serializable {
    serialize() {
      console.log(`${className}: ${JSON.stringify(this)}`);
    }
  };
}

export type Serializable = { serialize(): void };

export function isSerializable(target): target is Serializable {
  return typeof target.serialize === "function";
}
