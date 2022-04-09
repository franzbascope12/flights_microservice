import { Injectable } from '@nestjs/common';
import { Age } from './shared/valueObjects/age';

@Injectable()
export class AppService {
  getHello(): string {
    const test: Age = new Age(1);
    console.log(test.value);
    return 'Hello World!';
  }
}
