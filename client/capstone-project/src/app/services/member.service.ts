import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Members } from '../models/Members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private member: Members = new Members();
  currentMember = new BehaviorSubject<Members>(this.member);
  memberCount: number = 13;

  constructor() { }

  getMember(): Members {
    if(localStorage.getItem('currentMember')) {
      const member = JSON.parse(localStorage.getItem('currentMember'));
      this.currentMember = new BehaviorSubject(this.member);
      return member;
    }
  }

  giveMemberId(mem: Members) {
    mem.MemberId = this.memberCount + 1;
    this.memberCount++;
  }

  static storeLocalUser(member) {
    localStorage.setItem('currentMember', JSON.stringify(member));
  }
}
