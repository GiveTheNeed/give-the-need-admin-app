import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { YouthTutorService } from './youth-tutor.service';
import { AddYouthOrTutorComponent } from '../add-youth-or-tutor/add-youth-or-tutor.component';

import { Youth } from 'src/app/shared/models/youth.model';
import { Tutor } from 'src/app/shared/models/tutor.model';
import { Response } from 'src/app/core/models';
import { Operation } from 'src/app/shared/models/operation.model';

enum Link {
  Youth = 'Youth', Tutor = 'Tutor'
};

@Component({
  selector: 'app-youth',
  templateUrl: './youth.component.html',
  styleUrls: ['./youth.component.scss']
})
export class YouthComponent implements OnInit {

  links = ['Youth', 'Tutor'];
  activeLink = this.links[0];
  operationType!: Operation;
  obj: Youth = { _id: undefined, name: '', city: '', picDetails: '' };

  youths$!: Youth[];
  tutors$!: Tutor[];

  youthMembers = ['Sahasra', 'Amy', 'Anwita', 'Haley', 'Krithika', 'Saisha'];
  tutoringMembers = [
    { name: 'Samshi', imageUrl: 'assets/images/member.jpg' },
    { name: 'Anaya', imageUrl: 'assets/images/member.jpg' },
    { name: 'Siddharth', imageUrl: 'assets/images/boy-member.png' },
    { name: 'Teju', imageUrl: 'assets/images/boy-member.png' },
    { name: 'Eldana', imageUrl: 'assets/images/member.jpg' },
    { name: 'Drithi', imageUrl: 'assets/images/member.jpg' },
    { name: 'Geetu', imageUrl: 'assets/images/member.jpg' },
    { name: 'Saanvi', imageUrl: 'assets/images/member.jpg' }
  ];

  constructor(
    private youthTutorService: YouthTutorService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getYouths();
  }

  getYouths() {
    this.youthTutorService.getYouths().subscribe((response: Response) => {
      this.youths$ = response?.data;
    });
  }

  handleTabClick(link: any) {
    if(link === Link.Youth) {
      this.getYouths();
    } else if (link === Link.Tutor) {
      this.getTutors();
    }
  }

  handleAddYouth() {
    this.operationType = Operation.Add;
    this.obj = {};
    this.openDialog();
  }

  handleEditYouth(youth: Youth) {
    this.operationType = Operation.Update;
    this.obj = youth;
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddYouthOrTutorComponent, { data: this.obj});

    dialogRef.afterClosed().subscribe(result => {
      if (result && this.operationType === Operation.Add) {
        if(this.activeLink === Link.Youth) {
          this.addYouth(result);
        } else if(this.activeLink === Link.Tutor) {
          this.addTutor(result);
        }
      } else if (result && this.operationType === Operation.Update) {
        if(this.activeLink === Link.Youth) {
          this.updateYouth(result);
        } else if(this.activeLink === Link.Tutor) {
          this.updateTutor(result);
        }
      }
    });
  }

  addYouth(youth: Youth) {
    this.youthTutorService.createYouth(youth).subscribe((response: Response) => {
      this.getYouths();
    });
  }

  updateYouth(youth: Youth) {
    this.youthTutorService.updateYouth(youth).subscribe((response: Response) => {
      this.getYouths();
    });
  }

  handleDeleteYouth(youth: Youth) {
    this.youthTutorService.deleteYouth(youth).subscribe((response: Response) => {
      this.getYouths();
    });
  }

  getTutors() {
    this.youthTutorService.getTutors().subscribe((response: Response) => {
      this.tutors$ = response?.data;
    });
  }

  handleAddTutor() {
    this.operationType = Operation.Add;
    this.obj = {};
    this.openDialog();
  }

  addTutor(tutor: Tutor) {
    this.youthTutorService.createTutor(tutor).subscribe((response: Response) => {
      this.getTutors();
    });
  }
  
  handleEditTutor(tutor: Tutor) {
    this.operationType = Operation.Update;
    this.obj = tutor;
    this.openDialog();
  }

  updateTutor(tutor: Tutor) {
    this.youthTutorService.updateTutor(tutor).subscribe((response: Response) => {
      this.getTutors();
    });
  }

  handleDeleteTutor(tutor: Tutor) {
    this.youthTutorService.deleteTutor(tutor).subscribe((response: Response) => {
      this.getTutors();
    });
  }

}
