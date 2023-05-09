import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllSalesComponent } from 'src/dashboard/all-sales/all-sales.component';
import { NavbarComponent } from 'src/dashboard/navbar/navbar.component';
import { EventsComponent } from 'src/dashboard/events/events.component';
import { TSPComponent } from 'src/dashboard/tsp/tsp.component';
import { SidebarComponent } from 'src/dashboard/sidebar/sidebar.component';
import { SchedulesComponent } from 'src/dashboard/schedules/schedules.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TopcardsComponent } from 'src/dashboard/topcards/topcards.component';
import {HttpClientModule} from '@angular/common/http';
import { ClickableTableRowDirective, ViewallComponent } from 'src/dashboard/viewall/viewall.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewleadsComponent } from 'src/dashboard/newleads/newleads.component';
import { ExpiredComponent } from 'src/dashboard/expired/expired.component';
import { RenewalComponent } from 'src/dashboard/renewal/renewal.component';
import { Newleadform1Component } from './newleadspage/newleadform1/newleadform1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductcatalogueComponent } from 'src/dashboard/productcatalogue/productcatalogue.component';
import { HealthinsuranceComponent } from 'src/dashboard/healthinsurance/healthinsurance.component';
import { NewApplicantsComponent } from 'src/dashboard/new-applicants/new-applicants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CgprotectComponent } from 'src/dashboard/cgprotect/cgprotect.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatBadgeModule} from '@angular/material/badge';
import { QuotaionComponent } from './quotaion/quotaion.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { PolicycoveredComponent } from 'src/dashboard/policycovered/policycovered.component';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    NewApplicantsComponent,
    AllSalesComponent,
    NavbarComponent,
    EventsComponent,
    TSPComponent,
    SidebarComponent,
    SchedulesComponent,
    TopcardsComponent,
    ViewallComponent,
    DashboardComponent,
    NewleadsComponent,
    ExpiredComponent,
    RenewalComponent,
    Newleadform1Component,
    ProductcatalogueComponent,
    HealthinsuranceComponent,
    ClickableTableRowDirective,
    CgprotectComponent,
    QuotaionComponent,
    PolicycoveredComponent,
    TopcardsComponent
  
                        
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSidenavModule,
    MatSliderModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatTableModule,
    MatSelectModule,
    MatListModule,
    MatIconModule
  

    

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

 }
