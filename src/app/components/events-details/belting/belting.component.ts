import { Component, AfterViewInit, OnInit } from '@angular/core';

declare var WOW: any;
declare var spinner: any; 

@Component({
  selector: 'app-belting',
  templateUrl: './belting.component.html',
  styleUrl: './belting.component.css'
})
export class BeltingComponent implements OnInit {

  ngOnInit(): void {
    new WOW().init();
    new spinner();
  }

}