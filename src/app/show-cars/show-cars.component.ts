import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from "../app.component";
import { Car } from '../model/Car';
import { Point } from '../model/Point';

export interface DialogData {
  point: Point;
  cars: Car[];
}

@Component({
  templateUrl: './show-cars.component.html',
  styleUrls: ['./show-cars.component.css']
})
export class ShowCarsComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
