import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindClubsComponent } from './find-clubs.component';

describe('FindClubsComponent', () => {
  let component: FindClubsComponent;
  let fixture: ComponentFixture<FindClubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindClubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
