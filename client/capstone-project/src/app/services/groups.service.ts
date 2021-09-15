import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Club } from '../models/Club';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  clubUrl: string = 'http://localhost:8082/api/groups';
  constructor(private http: HttpClient) { }

  //get clubs from genre
  getClubs(): Observable<Club> {
    const clubs = this.http.get<Club>(this.clubUrl);
    return clubs;
  }

  //add club
  addClub(club: Club){

  }

}
