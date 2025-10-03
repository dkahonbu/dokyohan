import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  currenPage: any;

  ngOnInit(): void {
    this.getCurrentPage();
  }

  getCurrentPage() {
    let currentUrl = this.router.url;
    console.log(currentUrl);
    if (currentUrl == '/belting-ceremony') {
      // console.log('true');
      this.currenPage = 'Belting Ceremony';
    } else if (currentUrl == '/our-teams') {
      this.currenPage = 'Our Teams';
    } else if (currentUrl == '/batang-pinoy') {
      this.currenPage = 'Batang Pinoy';
    } else {
      this.currenPage = currentUrl;
    }
  }

}
