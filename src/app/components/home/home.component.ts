import { Component, AfterViewInit } from '@angular/core';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

declare var WOW: any;
declare var spinner: any;
declare var type: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  faAlignLeft = faAlignLeft;
  
  ngAfterViewInit(): void {
    new WOW().init();
    new type();
    new spinner();
  }
}
