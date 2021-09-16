import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { Club } from 'src/app/models/Club';
import { Members } from 'src/app/models/Members';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.css']
})
export class MemberInfoComponent implements OnInit, AfterContentChecked {

  @Input() club: Club;

  members: Members[];
  cols: any[];

  constructor() { 

    this.cols = [
      {header: "Name"},
      {header: "Email"},
      {header: "Phone"}
    ]
  }

  ngOnInit(): void {
    
  }

  ngAfterContentChecked(): void {
    this.members = this.club.Members;
  }

}
