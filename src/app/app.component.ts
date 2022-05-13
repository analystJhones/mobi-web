import { Component, OnInit } from '@angular/core';
import { Point } from './model/Point';
import { Car } from './model/Car';
import { MobiService } from './server/mobiService';
import {ShowCarsComponent} from './show-cars/show-cars.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'mobi-web project';
  lat = 51.678418;
  lng = 7.809007;
  points : Point[] = [];

  constructor(private service: MobiService, public dialog: MatDialog) { }

  ngOnInit() {

    this.service.getAllPoints()
      .subscribe( (response) => {
        this.points = response;
        this.lat = this.points[0].latitude;
        this.lng = this.points[0].longitude;
      });
  }

  clickedMarker(pointMarker: Point) {

    this.service.getAllCarIntoPoint(pointMarker._id)
      .subscribe( (response) => {
        const cars: Car[] = response;

        if (cars.length === 0) {
          alert('Não há registro para este ponto');
        }else{
          this.openDialog(pointMarker, cars);
        }
      });
  }

  openDialog(point : Point, cars: Car[]): void {
    const dialogRef = this.dialog.open(ShowCarsComponent, {
      width: '250px',
      data: {point: point, cars: cars},
    });
  }

}
