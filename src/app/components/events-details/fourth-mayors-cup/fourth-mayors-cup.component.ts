import { Component, Renderer2, OnInit } from '@angular/core';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
declare var WOW: any;
declare var spinner: any;
declare var vidComponent: any;

@Component({
  selector: 'app-fourth-mayors-cup',
  templateUrl: './fourth-mayors-cup.component.html',
  styleUrl: './fourth-mayors-cup.component.css'
})
export class fourthMayorsCupComponent implements OnInit {

  faCirclePlay = faCirclePlay;

  constructor(private renderer: Renderer2) { }
  ngOnInit(): void {
    new WOW().init();
    new spinner();
    new vidComponent();
  }
}
