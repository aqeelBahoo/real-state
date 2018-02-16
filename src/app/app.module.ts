import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { ImageUploadModule } from "angular2-image-upload";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddComponent } from './createAd/add.component';
import { AllAdsComponent } from './all-ads/all-ads.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ProductService } from "./product.service";
import { AuthService } from "./auth/auth.service";
import { AuthGuardService } from './auth/auth-guard.service';
import { LogGuardService } from "./auth/log-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    AddComponent,
    AllAdsComponent,
    AdDetailsComponent,
    DashboardComponent,
    LogoutComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ImageUploadModule.forRoot(),
  ],
  providers: [ProductService, AuthService, AuthGuardService, LogGuardService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
