import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalService } from 'src/app/hospital.service';

@Component({
  selector: 'app-add-patien',
  templateUrl: './add-patien.component.html',
  styleUrls: ['./add-patien.component.css']
})
export class AddPatienComponent implements OnInit {

  constructor(private http: HospitalService) { }

  ngOnInit(): void {
  }

  onSubmit(data : NgForm)
  {
    this.http.addPatient(data.value).subscribe();
    alert(data.value.patientName+" details Added");
  }

}
