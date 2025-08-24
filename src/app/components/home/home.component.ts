import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAlignLeft, faUsersViewfinder, faEnvelope, faCalendar, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
// import '../../../assets/js/smtp.js';
import { ToastrService } from 'ngx-toastr';

declare var WOW: any;
declare var spinner: any;
declare var type: any;
// declare var Email: any;

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
  faClock = faClock;
  
  getResponse: any;
  sendmailForm!: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  mobile: FormControl =  new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);  
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl("");

  constructor(
    private viewportScroller: ViewportScroller,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {
      this.sendmailForm = this.formBuilder.group({
        name: this.name,
        email: this.email,
        mobile: this.mobile,
        message: this.message,
        honeypot: this.honeypot
      }); 
    }
  // ngOnInit(): void {
  //   new WOW().init();
  //   new type();
  //   new spinner();
  // }
  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }

  ngAfterViewInit(): void {
    new WOW().init();
    new type();
    new spinner();
  }
  get f(){
    return this.sendmailForm.controls;
  }
  sendEmail(): void {
      if (this.sendmailForm.status == "VALID" && this.honeypot.value == "") {
        this.sendmailForm.disable(); // disable the form if it's valid to disable multiple submissions
        var formData: any = new FormData();
        formData.append("name", this.sendmailForm.value.name);
        formData.append("email", this.sendmailForm.value.email);
        formData.append("mobile", this.sendmailForm.value.mobile);
        formData.append("message", this.sendmailForm.value.message);
        this.http.post("https://script.google.com/macros/s/AKfycbxYq7KheI9YMn-S6ZVdj6Jmgvjzszqve7o95U1uhelMKAdLkO94IQP7-rggGQhSo_bvLg/exec", formData)
       .subscribe({
          next: response => {
            this.getResponse = response;
            if (this.getResponse.result) {
              this.toastr.success("Thanks for the message " + this.sendmailForm.value.name + " I'll get back to you soon!", "SUCCESS", {timeOut: 1500})
              this.sendmailForm.reset();
                // this.reloadCurrentRoute();
              // .onHidden.subscribe(() => {
              //   this.sendmailForm.reset();
              //   this.reloadCurrentRoute();
              // })
            } else {
              this.toastr.warning("Oops! Something went wrong... Reload the page and try again.", "WARNING", {timeOut: 1500})
              .onHidden.subscribe(() => {
                this.reloadCurrentRoute();
              })
            }
            this.sendmailForm.enable(); // re enable the form after a success
            console.log(response);
          },
          error: error => {
          }
        })
      }
    }

    reloadCurrentRoute() {
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/home#contact', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
    }
}
