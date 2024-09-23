import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { ExampleComponent } from './pages/example/example.component';
import { EventclickComponent } from './pages/eventclick/eventclick.component';
import { DatapassInputComponent } from './pages/datapass-input/datapass-input.component';
import { TwoWayBindingComponent } from './pages/two-way-binding/two-way-binding.component';
import { NgOnchangeHookComponent } from "./pages/ng-onchange-hook/ng-onchange-hook.component";
import { NgForComponent } from "./directives/ng-for/ng-for.component";
import { NgSwitchComponent } from "./directives/ng-switch/ng-switch.component";
import { NgClassComponent } from "./directives/ng-class/ng-class.component";
import { NgStyleComponent } from "./directives/ng-style/ng-style.component";
import { NgModelComponent } from "./directives/ng-model/ng-model.component";
import { CustomDirective } from './directives/custom.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoursesComponent,
    ExampleComponent, EventclickComponent,
    DatapassInputComponent, TwoWayBindingComponent,
    NgOnchangeHookComponent, NgForComponent,
    NgIfComponent, NgSwitchComponent, NgClassComponent, 
    NgStyleComponent, NgModelComponent, CustomDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CoursesService]
})
export class AppComponent {
  title = 'first-angular-project';
}
