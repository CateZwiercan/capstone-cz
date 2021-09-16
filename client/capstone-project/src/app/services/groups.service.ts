import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Club } from '../models/Club';
import { Observable } from 'rxjs';
import { Members } from '../models/Members';


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
    console.log(club.GroupId);
    return results;
  }

  //add member to club
  addMember(club: Club, member: Members): Observable<Members> {
    return this.http.post<Members>(`${this.clubUrl}/${club.GroupId}/members`, member, this.jsonContentTypeHeaders);
  }

  //delete member from club
  deleteMemberFromClub(clubId: number, memberId: number): Observable<Members> {
    return this.http.delete<Members>(`${this.clubUrl}/${clubId}/members/${memberId}`);
  }

  //get club by id
  getClubById(clubId: number): Observable<Club> {
    const results: Observable<Club> = this.http.get<Club>(`${this.clubUrl}/${clubId}`);
    return results;
  }

}
