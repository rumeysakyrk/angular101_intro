import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `<h2>{{"Title: " +getTitle()}}</h2>
    <ul>
        <li *ngFor="let course of courses">{{course}}</li>
    </ul>`,
    standalone: true,
    imports: [CommonModule]
}
)

export class CoursesComponent {

    title = "List of my courses ";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title
    }
}



interface Product{

    name:string;
    price:number;
    sayHello: () => string;
    sayHello2 (): void;
    //her ikisi de method oluşturma şeklidir. ikincisi de daha kolay
    
    }
    
    class Car implements Product{
    //name:string="bla bla". olsaydı değer atanması içi hata almazdı
    name:string;
    price: number;
    //buradaki değerler ya atanmalı ya da constructor ile atanmalı. 
    constructor(name:string, price: number){
    //burada atanıyor değerler
    this.name=name;
    this.price=price;
    }
    
    sayHello () {
    return "hello";
    }
    
    sayHello2 () {
    console.log("hi guys");
    }
    
    }
