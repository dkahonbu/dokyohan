import { Component, AfterViewInit } from '@angular/core';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAlignLeft, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';

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
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faUsersViewfinder = faUsersViewfinder;

  ngAfterViewInit(): void {
    new WOW().init();
    new type();
    new spinner();
  }
}
