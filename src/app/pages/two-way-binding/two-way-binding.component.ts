import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgOnchangeHookComponent } from '../ng-onchange-hook/ng-onchange-hook.component';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule, NgOnchangeHookComponent],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {

  name:string | undefined;

}
