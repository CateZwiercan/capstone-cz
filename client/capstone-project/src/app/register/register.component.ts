import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Members } from '../models/Members';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  currentMember: Members;
  regForm: FormGroup;

  constructor(private memService: MemberService, private router: Router) { 
    this.regForm = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required, Validators.email]),
      phone : new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
    this.memService.currentMember.subscribe(mem => this.currentMember = mem);
  }

  onSubmit(formEntry){
      this.memService.updateMember(formEntry);
      MemberService.storeLocalUser(formEntry);
      alert('You have successfully registered')
      this.router.navigate(['findClubs']);
  }
  
  }
