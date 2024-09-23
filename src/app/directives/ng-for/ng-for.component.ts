import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  names: string[] =["rumeysa", "betül", "kayrak"];

  userList:User[]=[];

  constructor(){
    this.userList.push(new User(1,"rumeysa", "rmys@gmail.com"));

    this.userList.push(new User(2,"rumeysa", "rmys@gmail.com"));

    this.userList.push(new User(3,"rumeysa", "rmys@gmail.com"));
  }

}
