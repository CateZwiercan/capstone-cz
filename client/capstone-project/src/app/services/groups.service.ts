import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Club } from '../models/Club';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  clubUrl: string = 'http://localhost:8082/api/groups';
  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set("Content-Type", "application/json"),
  };

  constructor(private http: HttpClient) { }

  //get clubs from genre
  getClubs(): Observable<Club> {
    const clubs = this.http.get<Club>(this.clubUrl);
    return clubs;
  }

  //add club
  addClub(club: Club): Observable<Club> {
    const results: Observable<Club> = this.http.post<Club>(
      this.clubUrl,
      club,
      this.jsonContentTypeHeaders
    );
    console.log(`addGoal(${club}) returned ${results}`);
    console.log(typeof club.GroupId);
    return results;
  }

  //add member to club
  addMember(club: Club, clubId: number): Observable<Club> {
    const results: Observable<Club> = this.http.post<Club>(`${this.clubUrl}/${clubId}/members`, club, this.jsonContentTypeHeaders);
    return results;
  }

  //delete member from club
  deleteMemberFromClub(clubId: number, memberId: number): Observable<Club> {
    const results: Observable<Club> = this.http.delete<Club>(`${this.clubUrl}/${clubId}/members/${memberId}`);
    return results;
  }

  //get club by id
  getClubById(clubId: number): Observable<Club> {
    const results: Observable<Club> = this.http.get<Club>(`${this.clubUrl}/${clubId}`);
    return results;
  }

}
