import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor() {
    this.users = [];
    console.log('====================================');
    console.log(this.users);
    console.log('====================================');
  }

  @Input() users: any[];

  ngOnInit(): void {}
}
