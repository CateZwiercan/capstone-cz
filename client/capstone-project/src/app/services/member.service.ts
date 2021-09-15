import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Members } from '../models/Members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

 private member: Members = new Members();
  currentMember = new BehaviorSubject<Members>(this.member);


  constructor() { }

  getMember(): Members {
    if(localStorage.getItem('currentMember')) {
      const member = JSON.parse(localStorage.getItem('currentMember'));
      this.currentMember = new BehaviorSubject(this.member);
      return member;
    }
  }

  updateMember(mem: Members) {
    //fix this to be next member
    mem.isRegistered = true;
    this.currentMember.next(this.member);
  }

  static storeLocalUser(member) {
    localStorage.setItem('currentMember', JSON.stringify(member));
  }
}
