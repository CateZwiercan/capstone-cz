import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../models/Genre';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {


  constructor(private httpClient: HttpClient) { }

  //get genres
  getGenres(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>('/api/organizations');
  }
}
