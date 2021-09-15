import { Component, OnInit } from '@angular/core';
import { Genre } from '../models/Genre';
import { OrganizationsService } from '../services/organizations.service';
import { Observable } from 'rxjs';
import { Club } from '../models/Club';
import { GroupsService } from '../services/groups.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Members } from '../models/Members';

@Component({
  selector: 'app-find-clubs',
  templateUrl: './find-clubs.component.html',
  styleUrls: ['./find-clubs.component.css']
})
export class FindClubsComponent implements OnInit {


  selectedClub: Club;
  cols: any[];
  genre: Genre;
  club: Club;
  display: boolean = false;
  member: Members;
  clubId: number;


  constructor(private orgService: OrganizationsService, private clubService: GroupsService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.orgService.getGenres().subscribe(gen => this.genre = gen);
    this.clubService.getClubs().subscribe(club => this.club = club);
    this.activatedRoute.url.subscribe((url) => (this.clubId = Number(url[1].path))
    );

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

  joinClub(clubId: number) {
    this.clubService.getClubById(clubId).subscribe((club) => (this.selectedClub = club));
    console.log(this.selectedClub);
    this.clubService.addMember(this.selectedClub, clubId);
    alert('You have joined the club');
    this.display = false;
  }

  leaveClub(clubId: number) {
    this.clubService.getClubById(clubId).subscribe((club) => (this.selectedClub = club));
    this.clubService.deleteMemberFromClub(clubId, this.member.MemberId);
    alert('You have left the club');
    this.display = false;
  }
}
