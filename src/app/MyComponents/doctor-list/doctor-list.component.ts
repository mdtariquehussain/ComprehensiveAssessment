import { Component, OnInit } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { Doctor } from 'src/app/Docotor';
import { HospitalService } from 'src/app/hospital.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors!: any;
  constructor(private http: HospitalService) { }
  ngOnInit() {
    this.doctors= this.http.getDoctors().subscribe(data=> this.doctors=data);
  }
}
