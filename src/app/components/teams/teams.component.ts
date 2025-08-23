import { Component, AfterViewInit, OnInit } from '@angular/core';

declare var WOW: any;
declare var spinner: any; 
declare var setPlaySpeed: any; 

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent implements OnInit {

  ngOnInit(): void {
    new WOW().init();
    new spinner();
    new setPlaySpeed();
  }

}
