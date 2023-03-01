import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  categories = [
    { value: '', viewValue: 'Community Service Award' },
    { value: 'steak-0', viewValue: 'Feed The Need' },
    { value: 'pizza-1', viewValue: 'Empower Youth' },
    { value: 'tacos-2', viewValue: 'Empower Women' },
  ];

  blogs$ = [
    {
      _id: 1,
      title: 'President’s Volunteer Service Award',
      description: 'AmPowering values and appreciate all the hard work and support of volunteers who are contributing time and efforts to our charity projects, fundraising events and causes to help our communities.',
      createdOn: new Date(),
      blogImage: 'assets/images/awards.jpg',
      createdBy: {
        name: {
          firstName: 'Sri',
          lastName: 'Chancharapu'
        }
      }
    }
    // , {
    //   _id: 2,
    //   title: 'President’s Volunteer Service Award',
    //   description: 'AmPowering values and appreciate all the hard work and support of volunteers who are contributing time and efforts to our charity projects, fundraising events and causes to help our communities.',
    //   createdOn: new Date(),
    //   blogImage: 'assets/images/charity.jpg',
    //   createdBy: {
    //     name: {
    //       firstName: 'Manoj',
    //       lastName: 'Chinthireddy'
    //     }
    //   }
    // }, {
    //   _id: 3,
    //   title: 'President’s Volunteer Service Award',
    //   description: 'AmPowering values and appreciate all the hard work and support of volunteers who are contributing time and efforts to our charity projects, fundraising events and causes to help our communities.',
    //   createdOn: new Date(),
    //   blogImage: 'assets/images/share.jpg',
    //   createdBy: {
    //     name: {
    //       firstName: 'Manoj',
    //       lastName: 'Chinthireddy'
    //     }
    //   }
    // }, {
    //   _id: 4,
    //   title: 'President’s Volunteer Service Award',
    //   description: 'AmPowering values and appreciate all the hard work and support of volunteers who are contributing time and efforts to our charity projects, fundraising events and causes to help our communities.',
    //   createdOn: new Date(),
    //   blogImage: 'assets/images/help.jpg',
    //   createdBy: {
    //     name: {
    //       firstName: 'Manoj',
    //       lastName: 'Chinthireddy'
    //     }
    //   }
    // }, {
    //   _id: 5,
    //   title: 'President’s Volunteer Service Award',
    //   description: 'AmPowering values and appreciate all the hard work and support of volunteers who are contributing time and efforts to our charity projects, fundraising events and causes to help our communities.',
    //   createdOn: new Date(),
    //   blogImage: 'assets/images/charity-set.jpg',
    //   createdBy: {
    //     name: {
    //       firstName: 'Manoj',
    //       lastName: 'Chinthireddy'
    //     }
    //   }
    // }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
