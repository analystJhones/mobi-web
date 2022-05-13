import { Component, OnInit } from '@angular/core';
import { Point } from './model/Point';
import { Car } from './model/Car';
import { MobiService } from './server/mobiService';

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

  constructor(private service: MobiService) { }

  ngOnInit() {

    this.service.getAllPoints()
      .subscribe( (response) => {
        console.log(response);

        this.points = response;
        this.lat = this.points[0].latitude;
        this.lng = this.points[0].longitude;
      });
  }

  clickedMarker(pointMarker: Point) {

    this.service.getAllCarIntoPoint(pointMarker._id)
      .subscribe( (response) => {
        console.log(response);

        const cars: Car[] = response;

        if (cars.length === 0) {
          alert('Não há registro para este ponto');
        }else{
          const data = this.formatarDataString(cars[0].initialDate);
          const message = `Placa: ${cars[0].placa} - Data: ${data} - Permanência: ${cars[0].duration}`
          alert(message);
        }
      });
  }

  formatarDataString(data:any){
    const dataFull = new Date(data);
    var year = dataFull.getFullYear().toString();
    var month = (1 + dataFull.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = dataFull.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    var hours = dataFull.getHours().toString();
    hours = hours.length > 1 ? hours : `0${hours}`
    var minutes = dataFull.getMinutes().toString();
    minutes = minutes.length > 1 ? minutes : `0${minutes}`;
    var seconds = dataFull.getSeconds().toString();
    seconds = seconds.length > 1 ? seconds : `0${seconds}`;

    var dataCompleta = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return dataCompleta;
  }


}
