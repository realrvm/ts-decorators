import { log } from "./accessorDecorator.js";
import { autolog } from "./autoAccessorDecorator.js";
import { serialize } from "./classDecorator.js";
import { double } from "./fieldDecorator.js";
import { factoryTime, time } from "./methodDecorator.js";

@serialize
export class Product {
  @double
  private taxRate: number = 20;

  constructor(
    public name: string,
    public price: number,
  ) {}

  @time
  getDetails(): string {
    return `Name: ${this.name}, Price: ${this.getPrice()}`;
  }

  // Parentheses are required for factory functions
  @factoryTime({ label: "Product.getPrice" })
  getPrice(): number {
    return this.price * (1 + this.taxRate / 100);
  }

  @time
  getAutoPrice(): number {
    return this.price * (1 + this.autoTax / 100);
  }

  @log
  get tax() {
    return this.taxRate;
  }

  @log
  set tax(newValue: number) {
    this.taxRate = newValue;
  }

  @autolog
  accessor autoTax: number = 20;
}
