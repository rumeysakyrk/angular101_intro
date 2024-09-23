import { Component } from '@angular/core';
import { NgOnchangeHookComponent } from '../ng-onchange-hook/ng-onchange-hook.component';

@Component({
  selector: 'app-eventclick',
  standalone: true,
  imports: [],
  templateUrl: './eventclick.component.html',
  styleUrl: './eventclick.component.css'
})

export class EventclickComponent {
  count:number=0;

  incraseCount():void{
    this.count++;
    console.log(this.count);
  }

}
