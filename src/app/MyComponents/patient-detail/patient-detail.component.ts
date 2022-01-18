import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalService } from 'src/app/hospital.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  patient : any
  x: any
  booking : any;
  doctors: any;
  constructor(private http : HospitalService) { }

  ngOnInit(): void {
    this.doctors= this.http.getDoctors().subscribe(data=> this.doctors=data);

  }

  onSubmit(data : NgForm): void
  {
    this.x=1;
    this.patient= this.http.getPatient(data.value.id).subscribe(data=> this.patient=data);
  }
  onClick()
  {
    this.booking= 1;
  }
  book(data2 : NgForm)
  {
    data2.value.patientName = this.patient.patientName;
    this.http.addAppointment(data2.value).subscribe();
    alert("Appointment booked for "+this.patient.patientName+" on "+data2.value.visitDate);
  }
}
