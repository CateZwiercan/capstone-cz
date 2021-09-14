import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { MyClubsComponent } from './my-clubs/my-clubs.component';
import { FindClubsComponent } from './find-clubs/find-clubs.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { StartClubComponent } from './start-club/start-club.component';
import { DefaultComponent } from './default/default.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    MyClubsComponent,
    FindClubsComponent,
    BookInfoComponent,
    StartClubComponent,
    DefaultComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
