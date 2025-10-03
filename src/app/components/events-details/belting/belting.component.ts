import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Belting } from '../../../models/belting.model';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

declare var WOW: any;
declare var spinner: any;

@Component({
  selector: 'app-belting',
  templateUrl: './belting.component.html',
  styleUrl: './belting.component.css'
})
export class BeltingComponent implements OnInit {
  faSearchPlus = faSearchPlus;
  belting: Belting[] = [
    new Belting('assets/img/beltingceremony/dka-honbu-belting-00.jpg', 'assets/img/beltingceremony/dka-honbu-belting-00.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-01.jpg', 'assets/img/beltingceremony/dka-honbu-belting-01.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-02.jpg', 'assets/img/beltingceremony/dka-honbu-belting-02.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-03.jpg', 'assets/img/beltingceremony/dka-honbu-belting-03.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-04.jpg', 'assets/img/beltingceremony/dka-honbu-belting-04.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-05.jpg', 'assets/img/beltingceremony/dka-honbu-belting-05.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-06.jpg', 'assets/img/beltingceremony/dka-honbu-belting-06.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-07.jpg', 'assets/img/beltingceremony/dka-honbu-belting-07.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-08.jpg', 'assets/img/beltingceremony/dka-honbu-belting-08.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-09.jpg', 'assets/img/beltingceremony/dka-honbu-belting-09.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-10.jpg', 'assets/img/beltingceremony/dka-honbu-belting-10.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-11.jpg', 'assets/img/beltingceremony/dka-honbu-belting-11.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-12.jpg', 'assets/img/beltingceremony/dka-honbu-belting-12.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-13.jpg', 'assets/img/beltingceremony/dka-honbu-belting-13.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-14.jpg', 'assets/img/beltingceremony/dka-honbu-belting-14.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-15.jpg', 'assets/img/beltingceremony/dka-honbu-belting-15.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-16.jpg', 'assets/img/beltingceremony/dka-honbu-belting-16.jpg', 'Dka Honbu Belting Ceremony 2025'),
    new Belting('assets/img/beltingceremony/dka-honbu-belting-17.jpg', 'assets/img/beltingceremony/dka-honbu-belting-17.jpg', 'Dka Honbu Belting Ceremony 2025')
  ];

  currentPage: number = 1;
  beltingCount: number = 0;
  beltingTableSize: number = 9;
  beltingTableSizes: any = [6, 8, 12, 16];

  ngOnInit(): void {
    new WOW().init();
    new spinner();
  }

  onTableDataChangeBelt(event: any) {
    this.currentPage = event;
    this.belting;
  }
  onTableSizeChangeBelt(event: any): void {
    this.beltingTableSize = event.target.value;
    this.currentPage = 1;
    this.belting;
  }

}