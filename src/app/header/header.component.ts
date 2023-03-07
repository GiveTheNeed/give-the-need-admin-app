import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>;
  screenSize!: string;

  constructor(
    @Inject(DOCUMENT) document: Document,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.initiateSubscriptions();
  }

  initiateSubscriptions() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  ngAfterViewInit() {
    this.closeNav();
  }

  openNav() {
    (<HTMLInputElement>document.getElementById("mySidenav")).style.width = "250px";
  }

  closeNav() {
    (<HTMLInputElement>document.getElementById("mySidenav")).style.width = "0";
  }
}
