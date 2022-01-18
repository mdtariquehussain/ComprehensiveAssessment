import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './MyComponents/add-doctor/add-doctor.component';
import { AddPatienComponent } from './MyComponents/add-patien/add-patien.component';
import { AppointmentListComponent } from './MyComponents/appointment-list/appointment-list.component';
import { DoctorListComponent } from './MyComponents/doctor-list/doctor-list.component';
import { PatientDetailComponent } from './MyComponents/patient-detail/patient-detail.component';
import { PatientListComponent } from './MyComponents/patient-list/patient-list.component';
import { UpdateAppointComponent } from './update-appoint/update-appoint.component';

const routes: Routes = [
  { path: 'doctors', component : DoctorListComponent},
  { path: 'patients', component : PatientListComponent},
  { path: 'addDoctor', component : AddDoctorComponent},
  { path : 'addPatient', component : AddPatienComponent},
  { path : 'appointments', component : AppointmentListComponent},
  { path : 'patient',  component : PatientDetailComponent },
  { path : 'prescription', component : UpdateAppointComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponet= [
  DoctorListComponent, 
  PatientListComponent, 
  AddDoctorComponent, 
  AddPatienComponent,
  AppointmentListComponent,
  PatientDetailComponent,
  UpdateAppointComponent
]
