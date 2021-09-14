import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    this.router.navigate(['register'], {relativeTo: this.route});
  }

  onLogin(): void {
    this.router.navigate(['myClubs'], {relativeTo: this.route});
  }

}
