import { Injectable } from '@angular/core';
import { StagiareModule } from '../models/stagiare/stagiare.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  getStagiaires(): Observable<StagiareModule[]> {
  const apiUrl = 'http://localhost:8081/getStagiares';

    return this.http.get<StagiareModule[]>(apiUrl);
  }


}
