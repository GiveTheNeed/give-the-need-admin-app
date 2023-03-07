import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Youth } from 'src/app/shared/models/youth.model';

export interface DialogData {
  _id: undefined,
  name: '',
  city: '',
  picDetails: ''
}

@Component({
  selector: 'app-add-youth-or-tutor',
  templateUrl: './add-youth-or-tutor.component.html',
  styleUrls: ['./add-youth-or-tutor.component.scss']
})
export class AddYouthOrTutorComponent {

  youthForm!: FormGroup;
  youthObj!: Youth;
  showLoading!: false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    private matDialogRef: MatDialogRef<AddYouthOrTutorComponent>,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    console.log('this.dialogData', this.dialogData);
    this.youthObj = this.dialogData || {};
    this.bindForm();
  }

  bindForm() {
    this.youthForm = this.formBuilder.group({
      _id: this.youthObj._id || '',
      name: this.youthObj.name || '',
      city: this.youthObj.city || '',
      picDetails: this.youthObj.picDetails || ''
    });
  }

  handleSaveYouth() {
    this.matDialogRef.close(this.youthForm.value);
  }
}
