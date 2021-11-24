import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationComponent} from './view/authentication/authentication.component';
import {HomeComponent} from './view/home/home.component';
import {DoubleAuthenticationComponent} from './view/double-authentication/double-authentication.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: AuthenticationComponent },
  { path: 'double_authentication', component: DoubleAuthenticationComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
