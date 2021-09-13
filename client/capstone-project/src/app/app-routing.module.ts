import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { BookInfoComponent } from './book-info/book-info.component';
import { DefaultComponent } from './default/default.component';
import { FindClubsComponent } from './find-clubs/find-clubs.component';
import { MyClubsComponent } from './my-clubs/my-clubs.component';
import { RegisterComponent } from './register/register.component';
import { StartClubComponent } from './start-club/start-club.component';

const fallbackRoute: Route = {
  path: '**', component: DefaultComponent
}

const routes: Routes = [
  {
    path: '',
    children: [
        {path: '', component: DefaultComponent},
        {path: 'register', component: RegisterComponent},
        {path: 'myClubs', component: MyClubsComponent},
        {path: 'findClubs', component: FindClubsComponent},
        {path: 'startClub', component: StartClubComponent},
        {path: 'bookInfo', component: BookInfoComponent},
        fallbackRoute
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
