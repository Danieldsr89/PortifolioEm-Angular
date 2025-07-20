import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [],
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css','./first-page.component-responsive.css']
})
export class FirstPageComponent {
@Input()
name: string ="";
@Input()
title: string = "";
constructor(){}
}
