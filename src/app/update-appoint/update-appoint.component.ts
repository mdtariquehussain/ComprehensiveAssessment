import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-update-appoint',
  templateUrl: './update-appoint.component.html',
  styleUrls: ['./update-appoint.component.css']
})
export class UpdateAppointComponent implements OnInit {

  res : any;
  constructor(private http: HospitalService) { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm)
  {
      this.http.updateAppointment(data.value.id, data.value.s).subscribe(str => this.res=str);
      alert("Prescription Updated");
  }
}
