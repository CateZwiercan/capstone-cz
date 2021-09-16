import { Component, OnChanges, OnInit } from '@angular/core';
import { Genre } from '../models/Genre';
import { OrganizationsService } from '../services/organizations.service';
import { Observable } from 'rxjs';
import { Club } from '../models/Club';
import { GroupsService } from '../services/groups.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Members } from '../models/Members';
import { MemberService } from '../services/member.service';

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
  displayMembers: boolean = false;


  constructor(private orgService: OrganizationsService, private clubService: GroupsService, private router: Router, private memberService: MemberService) {
  }

  ngOnInit(): void {
    this.orgService.getGenres().subscribe(gen => this.genre = gen);
    this.clubService.getClubs().subscribe(club => this.club = club);
    this.member = this.memberService.getMember();

    this.cols = [
      {header: "Genre"},
      {header: "Club Name"},
      {header: "Sponsor Name"},
      {header: "Number of Members"},
      {header: "Book of the Month"},
      {header: "Join/Leave Club"},
      {header: "View Members In Club"},
    ]
  }

  startClubNav() {
    this.router.navigate(['startClub']);
  }

  viewMembers(club: Club) {
    this.clubService.getClubById(club.GroupId).subscribe((club) => (this.selectedClub = club));
    this.displayMembers = true;
  }

  showDialog(club: Club) {
    this.display = true;
    this.clubService.getClubById(club.GroupId).subscribe((club) => (this.selectedClub = club));
  }

  joinClub() {
    this.clubService.addMember(this.selectedClub, this.member).subscribe(
      club => this.clubService.getClubById(this.selectedClub.GroupId)
    );
    console.log(this.selectedClub);
    alert('You have joined the club');
    this.clubService.getClubs().subscribe(club => this.club = club);
    this.display = false;
  }

  leaveClub() {
    this.clubService.deleteMemberFromClub(this.selectedClub.GroupId, this.member.MemberId).subscribe(
      club => this.clubService.getClubById(this.selectedClub.GroupId)
    );;
    alert('You have left the club');
    this.clubService.getClubs().subscribe(club => this.club = club);
    this.display = false;
  }
}
