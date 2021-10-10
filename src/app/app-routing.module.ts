import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParkingsComponent } from './parkings/parkings.component';
import { ParkingDetailComponent } from './parking-detail/parking-detail.component';


const appRoute: Routes=[
  {path:'parkings', component:ParkingsComponent},
  {path:'parkings/:id', component:ParkingDetailComponent},
  {path:'**', redirectTo:"/parkings"},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
