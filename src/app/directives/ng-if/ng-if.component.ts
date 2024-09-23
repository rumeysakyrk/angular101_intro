import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {

  isShow: boolean | undefined;

  toggleButton(): void {
    this.isShow = !this.isShow;
  }

}
