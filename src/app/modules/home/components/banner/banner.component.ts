import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BannerService } from './banner.service';

import { Banner } from 'src/app/shared/models/banner.model';
import { Operation } from 'src/app/shared/models/operation.model';
import { Response } from 'src/app/core/models';
import { AddBannerComponent } from '../add-banner/add-banner.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banners$!: Banner[];
  operationType!: Operation;

  constructor(private bannerService: BannerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBanners();
  }

  getBanners() {
    this.bannerService.getBanners().subscribe((response: Response) => {
      this.banners$ = response?.data;
    });
  }

  handleAddBanner() {
    this.operationType = Operation.Add;
    this.openDialog();
  }

  editBanner() {
    this.operationType = Operation.Update;
    this.openDialog();
  }

  handleDeleteBanner(banner: Banner) {
    this.bannerService.deleteBanner(banner).subscribe((response: Response) => {
      this.getBanners();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddBannerComponent, { data: { name: '', city: '', picDetails: '' }});

    dialogRef.afterClosed().subscribe(result => {
      if (result && this.operationType === Operation.Add) {
        this.addBanner(result)
      } else if (result && this.operationType === Operation.Update) {
        this.updateBanner(result);
      }
    });
  }

  addBanner(banner: Banner) {
    this.bannerService.createBanner(banner).subscribe((response: Response) => {
      this.getBanners();
    });
  }

  updateBanner(banner: Banner) {
    this.bannerService.updateBanner(banner).subscribe((response: Response) => {
      this.getBanners();
    });
  }

}
