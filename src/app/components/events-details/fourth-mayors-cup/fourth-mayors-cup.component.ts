import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
declare var WOW: any;
declare var spinner: any;

@Component({
  selector: 'app-fourth-mayors-cup',
  templateUrl: './fourth-mayors-cup.component.html',
  styleUrl: './fourth-mayors-cup.component.css'
})
export class fourthMayorsCupComponent implements OnInit, OnDestroy {
  
 private autocomplete: GeocoderAutocomplete | undefined;
  public selectedAddress: any;

  message = '';
  showWarnings = false;
  formData = {
    street: '',
    city: '',
    postcode: '',
    state: '',
    country: '',
  };

  // Values for the geocoder autocomplete components
  displayValue = '';
  streetValue = '';
  cityValue = '';
  stateValue = '';
  countryValue = ''; 
  displayVal = ''; 

spinners = {
    street: false,
    city: false,
    state: false,
    country: false
  };
  private readonly myAPIKey = 'a39b9a7df54e49fcb5d5508f2fd14482'; // Replace with your actual API key


  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    new WOW().init();
    new spinner();
    this.checkAddress();
     const apiKey = 'a39b9a7df54e49fcb5d5508f2fd14482';
    const container = document.getElementById('autocomplete-container');

    if (container) {
      this.autocomplete = new GeocoderAutocomplete(container, apiKey, {});

      // Register the 'select' event listener
      this.autocomplete.on('select', (location) => {
        // The `location` parameter is the GeoJSON Feature object of the selected address
        this.selectedAddress = location;
        // console.log('Selected location:', this.selectedAddress.properties.formatted);
        this.displayVal = this.selectedAddress.properties.formatted;
      });
    }
  }
  showSpinner(field: string) {
    this.spinners[field as keyof typeof this.spinners] = true;
  }

  hideSpinner(field: string) {
    this.spinners[field as keyof typeof this.spinners] = false;
  }

  onStreetSelected(street: any) {
    if (street) {
      this.formData.street = street.properties.street || '';
      this.streetValue = this.formData.street;
    }

    if (street && street.properties.postcode) {
      this.formData.postcode = street.properties.postcode;
    }

    if (street && street.properties.city) {
      this.formData.city = street.properties.city;
      this.cityValue = this.formData.city;
    }

    if (street && street.properties.state) {
      this.formData.state = street.properties.state;
      this.stateValue = this.formData.state;
    }

    if (street && street.properties.country) {
      this.formData.country = street.properties.country;
      this.countryValue = this.formData.country;
    }
  }

  onCitySelected(city: any) {
    if (city) {
      this.formData.city = city.properties.city || '';
      this.cityValue = this.formData.city;
    }

    if (city && city.properties.postcode) {
      this.formData.postcode = city.properties.postcode;
    }

    if (city && city.properties.state) {
      this.formData.state = city.properties.state;
      this.stateValue = this.formData.state;
    }

    if (city && city.properties.country) {
      this.formData.country = city.properties.country;
      this.countryValue = this.formData.country;
    }
  }

  onStateSelected(state: any) {
    if (state) {
      this.formData.state = state.properties.state || '';
      this.stateValue = this.formData.state;
    }

    if (state && state.properties.country) {
      this.formData.country = state.properties.country;
      this.countryValue = this.formData.country;
    }
  }

  onCountrySelected(country: any) {
    if (country) {
      this.formData.country = country.properties.country || '';
      this.countryValue = this.formData.country;
    }
  }

  checkAddress() {
    this.message = '';
    this.showWarnings = false;

    if (!this.formData.postcode || !this.cityValue || !this.streetValue || !this.stateValue || !this.countryValue) {
      this.highlightEmpty();
      this.message = "Please fill in the required fields and check your address again.";
      return;
    }
    
    console.log(this.streetValue);
    console.log(this.cityValue);
    console.log(this.formData.postcode);
    console.log(this.stateValue);
    console.log(this.countryValue);
    console.log(this.displayVal);
  }

ngOnDestroy(): void {
    // It's good practice to clean up event listeners to prevent memory leaks
    if (this.autocomplete) {
      this.autocomplete.off('select');
    }
  }

  highlightEmpty() {
    this.showWarnings = true;

    // Remove warnings after 3 seconds
    setTimeout(() => {
      this.showWarnings = false;
    }, 3000);
  }
}
