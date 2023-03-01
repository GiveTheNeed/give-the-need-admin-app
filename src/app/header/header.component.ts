import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  screenSize!: string;

  constructor(@Inject(DOCUMENT) document: Document) {
  }

  ngOnInit(): void {
    this.closeNav();
  }

  openNav() {
    (<HTMLInputElement>document.getElementById("mySidenav")).style.width = "250px";
  }
  
  closeNav() {
    (<HTMLInputElement>document.getElementById("mySidenav")).style.width = "0";
  }

}
