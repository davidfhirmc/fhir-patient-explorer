import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AUTH_SERVICE, FhirAuthService } from './shared/auth/auth.service';
import { DATA_SERVICE, FhirDataService } from './shared/fhir-data/fhir-data.service';
import { HeaderComponent } from './header/header.component';
import { PractitionerComponent } from './practitioner/practitioner.component';
import { PatientComponent } from './patient/patient.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PractitionerComponent,
    PatientComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: AUTH_SERVICE, useClass: FhirAuthService },
    {provide: DATA_SERVICE, useFactory: (http) => new FhirDataService(http), deps: [HttpClient]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
