import { Component, OnInit } from '@angular/core';

declare var WOW: any;
declare var spinner: any; 

@Component({
  selector: 'app-batang-pinoy',
  templateUrl: './batang-pinoy.component.html',
  styleUrl: './batang-pinoy.component.css'
})
export class BatangPinoyComponent implements OnInit {
  ngOnInit(): void {
    new WOW().init();
    new spinner();
  }
}
