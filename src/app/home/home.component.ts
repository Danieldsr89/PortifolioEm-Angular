import { Component } from '@angular/core';
import { FirstPageComponent } from './compenents/first-page/first-page.component'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FirstPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
