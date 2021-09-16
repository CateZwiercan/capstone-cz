import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Members } from '../models/Members';
import { MemberService } from './member.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuardService {

  currentMember: Members;

  constructor(private memService: MemberService, public router: Router) { }

  canActivate(): boolean {
    this.currentMember = this.memService.getMember();
    console.log(this.currentMember);
    if (this.currentMember.isRegistered === false) {
      this.router.navigate(['register']);
      alert('You havent registered yet! You will be redirected to the register page.');
      return false;
    }
    return true;
  }
}
