import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GroupsService } from '../services/groups.service';

@Component({
  selector: 'app-start-club',
  templateUrl: './start-club.component.html',
  styleUrls: ['./start-club.component.css']
})
export class StartClubComponent implements OnInit {

  startClubForm: FormGroup;

  constructor(private clubService: GroupsService) { 
    this.startClubForm = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      genre : new FormControl(null, [Validators.required]),
      sponserName : new FormControl(null, [Validators.required]),
      sponserEmail : new FormControl(null, [Validators.required, Validators.email]),
      sponserPhone : new FormControl(null, [Validators.required]),
      groupSize : new FormControl(null, [Validators.required]),
      bookOfMonth: new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit(formEntry){
    this.clubService.addClub(formEntry);
    alert('You have successfully started a new club')
}

}
