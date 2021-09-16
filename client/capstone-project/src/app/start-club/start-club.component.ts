import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Club } from '../models/Club';
import { Genre } from '../models/Genre';
import { GroupsService } from '../services/groups.service';
import { OrganizationsService } from '../services/organizations.service';


@Component({
  selector: 'app-start-club',
  templateUrl: './start-club.component.html',
  styleUrls: ['./start-club.component.css'],
  providers: [MessageService]
})
export class StartClubComponent implements OnInit {

  startClubForm: FormGroup;
  club: Club;
  genres: Genre[];
  selectedGenre: Genre;
  clubIdCounter: number = 16;

  constructor(private clubService: GroupsService, private genreService: OrganizationsService, private mesService: MessageService) { 
    this.startClubForm = new FormGroup({
      GroupName : new FormControl(null, [Validators.required]),
      OrganizationName : new FormControl(null, [Validators.required]),
      SponsorName : new FormControl(null, [Validators.required]),
      SponsorEmail : new FormControl(null, [Validators.required, Validators.email]),
      SponsorPhone : new FormControl(null, [Validators.required]),
      MaxGroupSize : new FormControl(null, [Validators.required]),
      BookOfMonth: new FormControl(null, [Validators.required]),
    })

    this.genres = [
      {OrganizationName: 'Fantasy', OrganizationId: 'fantasy', Description: 'This is fantasy'},
      {OrganizationName: 'Science Fiction', OrganizationId: 'sciFi', Description: 'This is Science Fiction'},
      {OrganizationName: 'Romance', OrganizationId: 'romance', Description: 'This is Romance'},
      {OrganizationName: 'Mystery', OrganizationId: 'mystery', Description: 'This is Mystery'},
      {OrganizationName: 'Thriller', OrganizationId: 'thriller', Description: 'This is Thriller'},
      {OrganizationName: 'Horror', OrganizationId: 'horror', Description: 'This is Horror'}
    ]
  }

  ngOnInit(): void {
    this.clubService.getClubs().subscribe(clubs => this.club = clubs)
  }

  onSubmit(formEntry){
    if(this.startClubForm.valid) {
      this.clubService.addClub(formEntry).subscribe((club) => this.clubService.getClubs());
      this.mesService.add({severity:'success', summary:'Confirmed', detail:'You have started a new club'});
    } else {
      this.mesService.add({severity:'error', summary:'Invalid Entry', detail:'Please make sure all fields are filled out'});
    }
    
}

}
