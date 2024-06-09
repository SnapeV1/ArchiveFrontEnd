import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { StagiareModule } from '../models/stagiare/stagiare.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  stagiaires: StagiareModule[] = [];
  searchQuery: string = '';
  filteredStagiaires: StagiareModule[] = [];

  constructor(private http: HttpClient,private service:ServiceService) { }


  ngOnInit(): void {
  this.getStagiaires();

  }
  getStagiaires(): void {
    this.service.getStagiaires().subscribe(
      data => {
        this.stagiaires = data;
        this.updateFilteredStagiaires();  
      },
      error => console.error('There was an error!', error)
    );
  }

  updateFilteredStagiaires(): void {
    if (this.searchQuery) {
      this.filteredStagiaires = this.stagiaires.filter(stagiaire =>
        stagiaire.identifiant.includes(this.searchQuery)
      );
    } else {
      this.filteredStagiaires = this.stagiaires;
    }
  }
}

