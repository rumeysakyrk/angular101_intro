import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-onchange-hook',
  standalone: true,
  imports: [],
  templateUrl: './ng-onchange-hook.component.html',
  styleUrl: './ng-onchange-hook.component.css'
})
export class NgOnchangeHookComponent implements OnChanges {

 

  @Input() name: string | undefined;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
