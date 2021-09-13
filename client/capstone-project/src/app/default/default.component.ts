import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  router: Router;

  constructor() { }

  ngOnInit(): void {
  }

  onRegister(): void {
    this.router.navigate(['register']);
  }

  onLogin(): void {
    this.router.navigate(['myClubs']);
  }

}
