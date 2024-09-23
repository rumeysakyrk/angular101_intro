import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ng-model.component.html',
  styleUrl: './ng-model.component.css'
})
export class NgModelComponent {

  @Input() myName:string | undefined;

  constructor(){

  }


}
