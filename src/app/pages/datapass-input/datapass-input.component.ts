import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datapass-input',
  standalone: true,
  imports: [],
  templateUrl: './datapass-input.component.html',
  styleUrl: './datapass-input.component.css'
})
export class DatapassInputComponent {

  @Input() name:string | undefined;

}
