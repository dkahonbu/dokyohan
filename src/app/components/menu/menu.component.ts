import { Component } from '@angular/core';
import { faAlignLeft, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  faAlignLeft = faAlignLeft;
  faBars = faBars;
}
