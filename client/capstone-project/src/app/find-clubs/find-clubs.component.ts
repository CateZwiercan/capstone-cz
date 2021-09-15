import { Component, OnInit } from '@angular/core';
import { Genre } from '../models/Genre';
import { OrganizationsService } from '../services/organizations.service';
import { Observable } from 'rxjs';
import { Club } from '../models/Club';
import { GroupsService } from '../services/groups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-clubs',
  templateUrl: './find-clubs.component.html',
  styleUrls: ['./find-clubs.component.css']
})
export class FindClubsComponent implements OnInit {


  selectedGenre: Genre;
  cols: any[];
  genre: Genre;
  club: Club;
  display: boolean = false;


  constructor(private orgService: OrganizationsService, private clubService: GroupsService, private router: Router) {
  }

  ngOnInit(): void {
    this.orgService.getGenres().subscribe(gen => this.genre = gen);
    this.clubService.getClubs().subscribe(club => this.club = club);

    this.cols = [
      {header: "Genre"},
      {header: "Club Name"},
      {header: "Sponsor Name"},
      {header: "Number of Members"},
      {header: "Book of the Month"},
      {header: "Join/Remove"},
    ]
  }

  startClubNav() {
    this.router.navigate(['startClub']);
  }

  showDialog() {
    this.display = true;
  }

  joinClub() {

  }

  leaveClub() {
    
  }
}
