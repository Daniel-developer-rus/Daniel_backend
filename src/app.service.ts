import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers() {
    return [{ name: 'daniel', age: 27 }];
  }
}
