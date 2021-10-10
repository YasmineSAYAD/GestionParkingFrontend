import { Component, OnInit } from '@angular/core';
import{ParkingInfo} from "../parkingInfo";
import{ParkingService} from "../parking.service";
@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss']
})
export class ParkingsComponent implements OnInit {
parkings: ParkingInfo[];
IsLoaded: boolean= false;
  constructor(private parkingService: ParkingService) { }

  ngOnInit(): void {
    this.parkingService.getParkings().subscribe(
      response  => {
        this.parkings=response;
        this.IsLoaded=true;
      }
    );
  }

  calculStyleStatut(parking: ParkingInfo){
    if(parking.statut==='Ouvert'){
      return {color:'green'}
    }else  if(parking.statut==='Fermé'){
      return {color:'red'}
    }else if(parking.statut==='Reservé aux abonnés'){
      return {color:'orange'}
    }else{
      return{'font-style':"Italic"}
    }
  }

}
