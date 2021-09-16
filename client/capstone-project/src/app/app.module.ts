import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { MyClubsComponent } from './my-clubs/my-clubs.component';
import { FindClubsComponent } from './find-clubs/find-clubs.component';
import { StartClubComponent } from './start-club/start-club.component';
import { DefaultComponent } from './default/default.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberInfoComponent } from './find-clubs/member-info/member-info.component';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { CardModule } from 'primeng/card'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    MyClubsComponent,
    FindClubsComponent,
    StartClubComponent,
    DefaultComponent,
    MainComponent,
    MemberInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DropdownModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule,
    ToastModule,
    ConfirmPopupModule,
    CardModule
    
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
