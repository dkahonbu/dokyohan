import { Component, HostListener, OnInit  } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit  {
  showScrollButton = false;
  
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faAngleRight = faAngleRight;
  faChevronUp = faChevronUp;
  currenPage: any;

  constructor(private viewportScroller: ViewportScroller, private router: Router) {}
  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }
  @HostListener('window:scroll', [])
  
  onWindowScroll() {
    // Show the button when scrolled down a certain amount
    this.showScrollButton = window.pageYOffset > 200; // Adjust 200 as needed
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
ngOnInit(): void {
      this.getCurrentPage();
    }

    getCurrentPage() {
      let currentUrl = this.router.url;
      if(currentUrl == '/home') {
        // console.log('true');
        this.currenPage = currentUrl;
      } 
    }
}
