import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { StagiareModule } from '../models/stagiare/stagiare.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  stagiaires: StagiareModule[] = [];

  constructor(private http: HttpClient,private service:ServiceService) { }


  ngOnInit(): void {
  this.getStagiaires();
  }
  getStagiaires(){
    this.service.getStagiaires().subscribe(
      data => this.stagiaires = data,
      error => console.error('There was an error!', error)
    );
  }


}
