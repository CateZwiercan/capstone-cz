import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyClubsComponent } from "../my-clubs/my-clubs.component";
import { RegisterComponent } from "../register/register.component";

export const registerLoginRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'register',
                component: RegisterComponent,
                outlet: 'registerOrLogin'
            },
            {
                path: 'myClubs',
                component: MyClubsComponent,
            }
        ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(
            registerLoginRoutes)
    ],
    exports: [
        RouterModule
    ],
})

export class FoodGroupsRoutingModule {
}
