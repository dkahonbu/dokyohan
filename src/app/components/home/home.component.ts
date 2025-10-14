import { Component, OnInit, AfterViewInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAlignLeft, faUsersViewfinder, faEnvelope, faCalendar, faMapMarkerAlt, faClock, faUserPlus } from '@fortawesome/free-solid-svg-icons';
// import '../../../assets/js/smtp.js';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';


declare var WOW: any;
declare var spinner: any;
declare var type: any;
// declare var Email: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  private autocomplete: GeocoderAutocomplete | undefined;
  public selectedAddress: any;

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
  faUserPlus = faUserPlus;

  todayDate: any = new Date();
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();
  ageVal?: number;
  currentMonthVadl?: number;
  currentMonthVal = this.todayDate.getMonth();
  datePipeVal?: any;

  getResponse: any;
  birthdateVal: any;
  birthdateYr: any;
  birthdateMonth?: number;
  lessYr: any;
  displayVal: any;
  ss: any;

  sendmailForm!: FormGroup;
  registerMailForm!: FormGroup;

  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  mobile: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(456)]);
  honeypot: FormControl = new FormControl("");

  rname: FormControl = new FormControl("", [Validators.required]);
  // age: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);
  birthdate: FormControl = new FormControl("", [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]);
  age: FormControl = new FormControl('', [Validators.required]);
  remail: FormControl = new FormControl("", [Validators.required, Validators.email]);
  rmobile: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);
  honeypotreg: FormControl = new FormControl("");

  constructor(
    private viewportScroller: ViewportScroller,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private datePipe: DatePipe,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.sendmailForm = this.formBuilder.group({
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      message: this.message,
      honeypot: this.honeypot
    });

    this.registerMailForm = this.formBuilder.group({
      rname: this.rname,
      birthdate: this.birthdate,
      age: this.age,
      remail: this.remail,
      rmobile: this.rmobile,
      honeypotreg: this.honeypotreg
    });

  }

  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }

  ngAfterViewInit(): void {
    new WOW().init();
    new type();
    new spinner();
    this.getdate();
    const apiKey = 'a39b9a7df54e49fcb5d5508f2fd14482';
    const container = document.getElementById('autocomplete-container');  
//  const myInputField = this.el.nativeElement.querySelector('geoapify-autocomplete-input');

    if (container) {
      this.autocomplete = new GeocoderAutocomplete(container, apiKey, {});
      this.ss = 
      // Register the 'select' event listener
      this.autocomplete.on('select', (location) => {
        this.selectedAddress = location.properties.formatted;
      });
      this.autocomplete.on('input', (userInput) => {
        this.selectedAddress = userInput;
      });
    }
  }
  get f() {
    return this.sendmailForm.controls;
  }
  get h() {
    return this.registerMailForm.controls;
  }
  getdate() {
    this.birthdate.valueChanges.subscribe(value => {
      this.birthdateVal = value;
      const dateObject = new Date(this.birthdateVal);

      this.birthdateYr = dateObject.getFullYear();
      this.birthdateMonth = dateObject.getMonth();
      this.currentMonthVal = this.currentMonth;

       if (value) {
      // this.datePipeVal = this.datePipe.transform(dateObject, 'mediumDate');
      this.datePipeVal = this.datePipe.transform(dateObject, 'dd/MM/yyyy');
      // console.log(this.datePipeVal);
      if (this.currentMonthVal >= this.birthdateMonth) {
        this.ageVal = this.currentYear - this.birthdateYr;
        this.age.setValue(this.ageVal);
        // console.log('Age >= ', this.age.value);
      } else {
        this.lessYr = this.currentYear - this.birthdateYr;
        this.ageVal = this.lessYr - 1;
        this.age.setValue(this.ageVal);
      }
       } else {
        this.age.setValue('');
       }

    });
  }

  registerMail(): void {
 
    // console.log(this.registerMailForm.value);
    // console.log(this.datePipeVal);
    // console.log(this.age.value);
    // console.log(this.registerMailForm.value.remail);
    // console.log(this.registerMailForm.value.rmobile);
    // console.log(this.selectedAddress);
    if (this.registerMailForm.status == "VALID" && this.honeypotreg.value == "") {
      this.registerMailForm.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("name", this.rname.value);
      formData.append("birthdate", this.datePipeVal);
      formData.append("age", this.age.value);
      formData.append("email", this.remail.value);
      formData.append("mobile", this.rmobile.value);
      formData.append("address", this.selectedAddress);
      this.http.post("https://script.google.com/macros/s/AKfycbwE1fHB482tRQKAxouAUdB_tXCiBgYFpDE-ccofJWGwLQXz-befhGwHtXTIjPTHD_pf/exec", formData)
        .subscribe({
          next: response => {
            this.getResponse = response;
            if (this.getResponse.result == 'success') {
              this.toastr.success("Thanks for the message " + this.rname.value + " I'll get back to you soon!", "SUCCESS", { timeOut: 3000 })
              this.registerMailForm.reset();
                  this.reloadCurrentRoute();

            } else {
              this.toastr.warning("Oops! Something went wrong... Reload the page and try again.", "WARNING", { timeOut: 3000 })
                .onHidden.subscribe(() => {
                  this.reloadCurrentRoute();
                })
            }
            this.registerMailForm.enable(); // re enable the form after a success
            // console.log(response);
          },
          error: error => {
          }
        })
    }
  }
  sendEmail(): void {
    if (this.sendmailForm.status == "VALID" && this.honeypot.value == "") {
      this.sendmailForm.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("name", this.sendmailForm.value.name);
      formData.append("email", this.sendmailForm.value.email);
      formData.append("mobile", this.sendmailForm.value.mobile);
      formData.append("message", this.sendmailForm.value.message);
      this.http.post("https://script.google.com/macros/s/AKfycbyIUHawZdaAzkbUtV3cyS5gYicdtZdqerKqHQjtC2045epZcqlTw2o4feiGDp-cCHZzzA/exec", formData)
        .subscribe({
          next: response => {
            this.getResponse = response;
            if (this.getResponse.result == 'success') {
              this.toastr.success("Thanks for the message " + this.sendmailForm.value.name + " I'll get back to you soon!", "SUCCESS", { timeOut: 3000 })
              this.sendmailForm.reset();
            } else {
              this.toastr.warning("Oops! Something went wrong... Reload the page and try again.", "WARNING", { timeOut: 3000 })
                .onHidden.subscribe(() => {
                  this.reloadCurrentRoute();
                })
            }
            this.sendmailForm.enable(); // re enable the form after a success
          },
          error: error => {
          }
        })
    }
  }


  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
  
  ngOnDestroy(): void {
    // It's good practice to clean up event listeners to prevent memory leaks
    if (this.autocomplete) {
      this.autocomplete.off('select');
      this.autocomplete.clearFilters();
    }
  }

}
