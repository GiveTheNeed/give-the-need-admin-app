import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA: any[] = [
  { age: 'Kids (5-10)', bronze: '26 - 49', silver: '50 - 74', gold: '75+', lifetimeAchievementAward: '4000 + hours'},
  { age: 'Teens (11 – 15)', bronze: '50 – 74', silver: '75 – 99', gold: '100+', lifetimeAchievementAward: '4000 + hours'},
  { age: 'Young Adults (16 – 25)', bronze: '100 – 174', silver: '175 – 249', gold: '250+', lifetimeAchievementAward: '4000 + hours'},
  { age: 'Adults (26+)', bronze: '100 – 249', silver: '250 – 499', gold: '500+', lifetimeAchievementAward: '4000 + hours'}
];


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  blog$: any;
  displayedColumns: string[] = ['age', 'bronze', 'silver', 'gold', 'lifetimeAchievementAward'];
  dataSource = ELEMENT_DATA;

  FAQs = [{
    question: 'What if I had a birthday that increased my hourly requirement?',
    answer: `Age category is determined by the age a volunteer is for at least 7 months out of a designated 12-month award period.`
  }, {
    question: 'I submitted my application to GiveTheNeed and have recorded all of my volunteer hours and documentation into my account, but I haven’t heard back from GiveTheNeed about the award. Should I call or email?',
    answer: `Yes, please reach out at volunteer@givetheneed.org for any questions. <br> As subject should include: PVSA Volunteer Hours - First & Last name`
  }, {
    question: 'Can I apply for a PVSA each year?',
    answer: `Yes, volunteers can apply for one award each 12-month period. <br> Aug 26th 2022, Aug25th 2023.`
  }, {
    question: 'Will service hours completed with organizations other than GiveTheNeed be accepted?',
    answer: `Yes, you must provide contact information, including the organization’s name, phone number, and email, as well as the date and description of service.`
  }, {
    question: 'Will service hours that were completed virtually be accepted?',
    answer: `Yes, as long as contact information for the organization that benefited from your service is provided and photos of the service performed. Acceptable documentation includes: a photo of the volunteer actively engaged in the service activity, photo(s) of the items made. Example: Frannie made sandwiches for those experiencing homelessness. Frannie took action shots of herself making the photos, then with the bags of finished sandwiches, and also of herself as she dropped off the sandwiches at the shelter with the shelter sign in the background.`
  }, {
    question: 'Are service hours that have already been completed accepted?',
    answer: `Yes, however, they need to be current (preferably within the last year and a half). There is no guarantee that an award for service completed 2 years earlier will be approved by the PVSA.`
  }, {
    question: 'When can I expect to receive the award?',
    answer: `The Award certification process varies depending on the number of applicants each quarter. Recently, the PVSA office has had a backorder of awards and the actual award may not be ordered for several months. Unfortunately, this matter is out of our control. <br>
      Best case scenario, once GiveTheNeed verifies all volunteer hours and submits the information to the PVSA, the awards take 2-4 weeks to arrive.`
  }, {
    question: 'What if I’m a volunteer but I am not yet a United States citizen?',
    answer: `Per federal program rules, only U.S. citizens or lawful permanent residents (i.e., green card holders) may be awarded the PVSA.`
  }]

  constructor() { }

  ngOnInit(): void {

    this.blog$ = {
      _id: 1,
      title: 'President’s Volunteer Service Award',
      description: `GiveTheNeed is a certifying organization for the President's Volunteer Service Award.A Certifying Organization is an organization that has been granted authority through an application and review process to give out the PVSA to volunteers. Certifying Organizations verify and certify that a volunteer has met the requirements to receive a PVSA within a 12 month period specified by the Certifying Organization. Only Certifying Organizations can certify volunteers’ eligibility for the PVSA and order awards.This award honors individuals whose service positively impacts communities in every corner of the nation and inspires those around them to take action, too. The PVSA has continued to honor the volunteers who are using their time and talents to solve some of the toughest challenges facing our nation!`,
      createdOn: new Date(),
      blogImage: 'assets/images/awards.jpg',
      createdBy: {
        name: {
          firstName: 'Sri',
          lastName: 'Chancharapu'
        }
      }
    };
  }

}
