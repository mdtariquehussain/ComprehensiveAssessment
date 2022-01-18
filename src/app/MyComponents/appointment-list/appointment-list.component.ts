import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/hospital.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments : any  
  constructor(private http : HospitalService) { }

  ngOnInit(): void {
    this.http.getAppointments().subscribe( data=> this.appointments=data );
  }



}
