import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youth',
  templateUrl: './youth.component.html',
  styleUrls: ['./youth.component.scss']
})
export class YouthComponent implements OnInit {

  youthMembers = ['Sahasra', 'Amy', 'Anwita', 'Haley', 'Krithika', 'Saisha'];
  tutoringMembers = [
    {name: 'Samshi', imageUrl: 'assets/images/member.jpg'},
    {name: 'Anaya', imageUrl: 'assets/images/member.jpg'},
    {name: 'Siddharth', imageUrl: 'assets/images/boy-member.png'},
    {name: 'Teju', imageUrl: 'assets/images/boy-member.png'},
    {name: 'Eldana', imageUrl: 'assets/images/member.jpg'},
    {name: 'Drithi', imageUrl: 'assets/images/member.jpg'},
    {name: 'Geetu', imageUrl: 'assets/images/member.jpg'},
    {name: 'Saanvi', imageUrl: 'assets/images/member.jpg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
