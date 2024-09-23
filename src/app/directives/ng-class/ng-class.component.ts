import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  isLarge:boolean=true;
  isBorder:boolean=true;
  isPinkBox:boolean=true;
  css:any={large:this.isLarge, blackBorder:this.isBorder, pinkBox:this.isPinkBox }
  constructor(){
    
  }

  styleToggle(){
    this.isLarge=!this.isLarge;
    this.isBorder=!this.isBorder;
    this.isPinkBox=!this.isPinkBox;
    this.css = { large: this.isLarge, blackBorder: this.isBorder, pinkBox: this.isPinkBox };
  }

}
