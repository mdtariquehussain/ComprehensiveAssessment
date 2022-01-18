import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponet } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDoctorComponent } from './MyComponents/add-doctor/add-doctor.component';
import { FormsModule } from '@angular/forms';
import { AddPatienComponent } from './MyComponents/add-patien/add-patien.component';
import { AppointmentListComponent } from './MyComponents/appointment-list/appointment-list.component';
import { PatientDetailComponent } from './MyComponents/patient-detail/patient-detail.component';
import { UpdateAppointComponent } from './update-appoint/update-appoint.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponet, 
    AddDoctorComponent, AddPatienComponent, AppointmentListComponent, PatientDetailComponent, UpdateAppointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
