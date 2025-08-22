import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'dokyohan';
  showMenu = false;
  showFooter = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private meta: Meta) {
    this.meta.addTag({ 
      name: 'description', 
      content: `Do-Kyohan Karate Association`
     })
}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showMenu = this.activatedRoute.root.firstChild?.snapshot.data['showHeader'] !== false;
        this.showFooter = this.activatedRoute.root.firstChild?.snapshot.data['showFooter'] !== false;
      }
    });
  }

}
