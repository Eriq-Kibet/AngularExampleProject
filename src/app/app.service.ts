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

  users = [
    {
      firstname: 'John',
      lastname: 'Doe',
      age: 30,
      email: 'kenaa@example.com',
      phone: '0123456789',
      address: '1234 Main St',
    },
    {
      firstname: 'Jane',
      lastname: 'Doe',
      age: 30,
      email: 'kenaa@example.com',
      phone: '0123456789',
      address: '1234 Main St',
    },
    {
      firstname: 'Jack',
      lastname: 'Dave',
      age: 40,
      email: 'kenaa@example.com',
      phone: '0123456789',
    },
  ];

  getUsers() {
    return this.users;
  }

  addusers(user: any) {
    return this.users.push(user);
  }
  testMethod(): string {
    return 'This is a Service';
  }
}
