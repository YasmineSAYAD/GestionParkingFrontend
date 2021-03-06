import { Injectable } from '@angular/core';
import{ParkingInfo} from "./parkingInfo";
import{Observable} from "rxjs"
import {map} from 'rxjs/operators'
import{HttpClient} from "@angular/common/http" 
import { environment } from 'src/environments/environment';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private httpClient:HttpClient) {}
    getParkings():Observable<ParkingInfo[]>{
   
    return this.httpClient.get<ParkingInfo[]>(environment.apiUrl+"/parkings");
   }
   getParking(id: number):Observable<ParkingInfo>{
   
    return this.httpClient.get<ParkingInfo[]>(environment.apiUrl+"/parkings").pipe(map(
      parkings=> parkings.find ( parking => parking.identifiant===id)
    ));
   }
  }

