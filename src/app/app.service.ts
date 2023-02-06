import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {
    console.log('====================================');
    console.log('This is a Service');
    console.log('====================================');
  }
  testMethod(): string {
    return 'This is a Service';
  }
}
