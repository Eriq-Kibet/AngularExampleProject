import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myOtherApp';
  name = 'Mic Testing';
  constructor(private appservice: AppService) {}

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  users: any[] = [];
  userCount = 0;

  ngOnInit() {
    const value = this.appservice.testMethod();
    console.log(`Value::::::`, value);
  }
  onSubmit() {
    console.log(this.userForm.value);
    const data = this.appservice.addusers(this.userForm.value);
    this.userCount = this.userCount + 1;
    this.userForm.reset();
  }
  getAllUsers() {
    this.users = this.appservice.getUsers();
  }

}
