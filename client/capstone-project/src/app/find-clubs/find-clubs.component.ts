import { Component, OnInit } from '@angular/core';
import { Genre } from '../models/Genre';
import { OrganizationsService } from '../services/organizations.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-find-clubs',
  templateUrl: './find-clubs.component.html',
  styleUrls: ['./find-clubs.component.css']
})
export class FindClubsComponent implements OnInit {

  genres: Observable<Genre[]>;
  selectedGenre: Genre;

  constructor(private orgService: OrganizationsService) { 
    this.genres = orgService.getGenres();
  }

  ngOnInit(): void {
  }

}
