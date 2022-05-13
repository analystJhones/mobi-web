import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Point } from '../model/Point';
import { Car } from '../model/Car'

@Injectable()
export class MobiService {
    constructor(private http: HttpClient) { }

     httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin':  'http://localhost:3000/points/',
          'Access-Control-Allow-Credentials': 'true'
        })
      }

    getAllPoints() {
        return this.http.get<Point[]>('http://localhost:3000/points/');
    }

    getAllCarIntoPoint(idPoint: string){
      console.log(idPoint);
      return this.http.get<Car[]>('http://localhost:3000/points/getRecordsOfPoint/'+idPoint);
    }
}
