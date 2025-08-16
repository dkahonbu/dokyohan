import { Component } from '@angular/core';
import { faAlignLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  faAlignLeft = faAlignLeft;
  faBars = faBars;

  constructor(private viewportScroller: ViewportScroller) {} 
    public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }
}
