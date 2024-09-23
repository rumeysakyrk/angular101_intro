import { Component } from '@angular/core';
import { Products, Type } from '../../models/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css'
})
export class NgSwitchComponent {
  product:Products;

  constructor(){
    this.product=new Products(1, "item 1", Type.Small);
  }

}
