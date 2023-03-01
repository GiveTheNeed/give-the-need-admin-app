import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events = [
    { name: 'Intellectual Disability', imagePath: 'assets/images/make-a-difference/intellectual-disability-1.jpeg' },
    { name: 'Intellectual Disability', imagePath: 'assets/images/make-a-difference/intellectual-disability-2.jpeg' },
    { name: 'Covid Charity Drive', imagePath: 'assets/images/make-a-difference/covid-charity-drive.jpeg' },
    { name: 'Feed The Need', imagePath: 'assets/images/make-a-difference/feed-the-need-1.jpeg' },
    { name: 'Feed The Need', imagePath: 'assets/images/make-a-difference/feed-the-need-2.jpeg' },
    { name: 'Plant Donations', imagePath: 'assets/images/make-a-difference/plant-donation-1.jpeg' },
    { name: 'Plant Donations', imagePath: 'assets/images/make-a-difference/plant-donation-2.jpeg' },
    { name: 'Homeless Shelters Drive', imagePath: 'assets/images/make-a-difference/homeless-shelter-drive.jpeg' },
    { name: 'Knowledge is Power', imagePath: 'assets/images/make-a-difference/knowledge-is-power.jpeg' },
    { name: 'Health is Wealth', imagePath: 'assets/images/make-a-difference/health-is-wealth.jpeg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
