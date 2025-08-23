import { Component, OnInit } from '@angular/core';
import { faAlignLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  faAlignLeft = faAlignLeft;
  faBars = faBars;
  currenPage: any;

  constructor(private viewportScroller: ViewportScroller,private router: Router) {} 
    public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }

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
