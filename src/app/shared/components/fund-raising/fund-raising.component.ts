import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-raising',
  templateUrl: './fund-raising.component.html',
  styleUrls: ['./fund-raising.component.scss']
})
export class FundRaisingComponent implements OnInit {

  fundraisingContent = [{
    imageUrl: 'assets/images/intellectual-disability.jpg',
    title: 'Intellectual Disability',
    description: `<p>GiveTheNeed support intellectually disabled children tailoring basic life skills and fundamental concepts to function as independently as possible on a daily basis. Advocate for the rights and full participation of all people with intellectual and developmental disabilities.</p>`,
    alt: 'Image of Intellectually Challenged'
  }, {
    imageUrl: 'assets/images/child-education.png',
    title: 'Child Education',
    description: `<p>GiveTheNeed promoting digital literacy that prepares children and youth for the secondary education and next generation work force. Support every child that deserves much need education for a life changing.
    Awarding annual, renewable scholarships to attend vocational school, college or other higher education institutions.</p>`,
    alt: 'Image of Child Education'
  }, {
    imageUrl: 'assets/images/feed-the-need.jpg',
    title: 'Feed The Need',
    description: `<p>FeedTheNeed program is committed to serving food to families and individuals facing hunger by partnering with food banks, shelters, orphanags, old-age homes, community organizations and local food programs.</p>`,
    alt: 'Image of FeedTheNeed'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
