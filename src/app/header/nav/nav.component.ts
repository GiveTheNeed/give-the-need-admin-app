import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() screenSize!: string;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([
      "(max-width: 1200px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.screenSize = 'small';
      } else {
        this.screenSize = 'large';
      }
    });
  }

  ngOnInit(): void {
  }

  onNavClick() {
    (<HTMLInputElement>document.getElementById("mySidenav")).style.width = "0";
  }

}
