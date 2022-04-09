import { ValueObject } from '../core/valueObject';
import { PositiveNumbers } from '../rules/positiveNumbers';

export class Age extends ValueObject {
  private readonly data: number;

  constructor(data: number) {
    super();
    this.validate(new PositiveNumbers(data));
    this.data = data;
  }

  get value() {
    return this.data;
  }
}
