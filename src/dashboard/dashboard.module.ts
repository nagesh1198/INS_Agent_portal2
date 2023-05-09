import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSalesComponent } from './all-sales/all-sales.component';
import { TSPComponent } from './tsp/tsp.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { EventsComponent } from './events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { TopcardsComponent } from './topcards/topcards.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {  ClickableTableRowDirective, ViewallComponent } from './viewall/viewall.component';
import { NewleadsComponent } from './newleads/newleads.component';
import { ExpiredComponent } from './expired/expired.component';
import { RenewalComponent } from './renewal/renewal.component';
import { ProductcatalogueComponent } from './productcatalogue/productcatalogue.component';
import { HealthinsuranceComponent } from './healthinsurance/healthinsurance.component';
import { ApplicationdetailsComponent } from './applicationdetails/applicationdetails.component';
import { NewApplicantsComponent } from './new-applicants/new-applicants.component';
import { CgprotectComponent } from './cgprotect/cgprotect.component';
import { NewleadsrowclikComponent } from './newleadsrowclik/newleadsrowclik.component';
import { PolicycoveredComponent } from './policycovered/policycovered.component';


@NgModule({
  declarations: [
    NewApplicantsComponent,
    AllSalesComponent,
    TSPComponent,
    SchedulesComponent,
    EventsComponent,
    NavbarComponent,
    SidebarComponent,
    TopcardsComponent,
    ViewallComponent,
    NewleadsComponent,
    ExpiredComponent,
    RenewalComponent,
    ProductcatalogueComponent,
    HealthinsuranceComponent,
    ApplicationdetailsComponent,
    ClickableTableRowDirective,
    CgprotectComponent,
    NewleadsrowclikComponent,
    PolicycoveredComponent,
    NavbarComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
   RouterModule
  ],
  
})
export class DashboardModule { }
