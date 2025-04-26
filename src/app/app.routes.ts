import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { StudentComponent } from './student/student.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'main', component: MainComponent},
    {path: 'student', component: StudentComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/:id', component: UserDetailsComponent}

];
