import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetEmployeeComponent } from '../components/get-employee/get-employee.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,GetEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
