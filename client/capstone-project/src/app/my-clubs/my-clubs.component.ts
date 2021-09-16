import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-clubs',
  templateUrl: './my-clubs.component.html',
  styleUrls: ['./my-clubs.component.css']
})
export class MyClubsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  joinClubs() {
    this.router.navigate(['findClubs']);
  }

}
