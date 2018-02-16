import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";

import {LoginComponent} from "../login/login.component";
import {SignupComponent} from "../signup/signup.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {AddComponent} from "../createAd/add.component";
import {AllAdsComponent} from "../all-ads/all-ads.component";
import {AdDetailsComponent} from "../ad-details/ad-details.component";

import {DashboardComponent} from "../dashboard/dashboard.component";
import {LogoutComponent} from "../logout/logout.component";

import {AuthGuardService as AuthGuard } from "../auth/auth-guard.service";
import {LogGuardService as Log} from "../auth/log-guard.service";


const routes:Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent, canActivate: [Log]},
  {path: 'login', component: LoginComponent, canActivate: [Log]},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'all-ads', component: AllAdsComponent, canActivate: [AuthGuard]},
  {path: 'ad-details/:id', component: AdDetailsComponent, canActivate: [AuthGuard]},
  {path: 'ad', component: AddComponent, canActivate: [AuthGuard]},

  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
