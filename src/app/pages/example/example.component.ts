import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent implements OnInit{

  name: string="rumeysa";
  constructor(){

  }
  ngOnInit(): void {
    
  }


}
