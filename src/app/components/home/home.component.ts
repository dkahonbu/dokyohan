import { Component, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAlignLeft, faUsersViewfinder, faEnvelope, faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../../../assets/js/smtp.js';

declare var WOW: any;
declare var spinner: any;
declare var type: any;
declare let Email: any;

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
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faCalendar = faCalendar;

  constructor(private viewportScroller: ViewportScroller) {}
  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }

  ngAfterViewInit(): void {
    new WOW().init();
    new type();
    new spinner();
  }
}
