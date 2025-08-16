import { Component, HostListener  } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  showScrollButton = false;
  
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faAngleRight = faAngleRight;
  faChevronUp = faChevronUp;

  constructor(private viewportScroller: ViewportScroller) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show the button when scrolled down a certain amount
    this.showScrollButton = window.pageYOffset > 200; // Adjust 200 as needed
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
