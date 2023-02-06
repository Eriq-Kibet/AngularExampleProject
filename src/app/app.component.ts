import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',],
})
export class AppComponent {
  title = 'myOtherApp';
  name = 'Mic Testing';

  constructor(private appservice: AppService) {}

  ngOnInit() {
    const value = this.appservice.testMethod();
    console.log(`Value::::::`, value);
  }
}
