import { BusinessRule } from '../core/businessRule';

export class PositiveNumbers implements BusinessRule {
  message = 'Number must be positive';
  data: number;

  constructor(data: number) {
    this.data = data;
  }

  validate(): boolean {
    return this.data <= 0;
  }
}
