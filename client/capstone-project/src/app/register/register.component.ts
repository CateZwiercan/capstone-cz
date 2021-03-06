import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Members } from '../models/Members';
import { MemberService } from '../services/member.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  currentMember: Members;
  regForm: FormGroup;

  constructor(private memService: MemberService, private router: Router, private mesService: MessageService) { 
    this.regForm = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required, Validators.email]),
      phone : new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
    this.memService.currentMember.subscribe(mem => this.currentMember = mem);
  }

  registerMember(formEntry){
    this.currentMember.MemberName = formEntry.name;
    this.currentMember.MemberEmail = formEntry.email;
    this.currentMember.MemberPhone = formEntry.phone;
    this.memService.giveMemberId(this.currentMember);
  }

  onSubmit(formEntry){
    if(this.regForm.valid) {
      this.registerMember(formEntry);
      MemberService.storeLocalUser(this.currentMember);
      alert('You have completed registration');
      this.router.navigate(['findClubs']);
    } else {
      this.mesService.add({severity:'error', summary:'Invalid Entry', detail:'Please make sure all fields are filled out'});
    }
  }
  
  }
