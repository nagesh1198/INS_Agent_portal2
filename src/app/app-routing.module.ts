import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationdetailsComponent } from 'src/dashboard/applicationdetails/applicationdetails.component';
import { CgprotectComponent } from 'src/dashboard/cgprotect/cgprotect.component';
import { ExpiredComponent } from 'src/dashboard/expired/expired.component';
import { HealthinsuranceComponent } from 'src/dashboard/healthinsurance/healthinsurance.component';
import { NewleadsComponent } from 'src/dashboard/newleads/newleads.component';
import { NewleadsrowclikComponent } from 'src/dashboard/newleadsrowclik/newleadsrowclik.component';
import { PolicycoveredComponent } from 'src/dashboard/policycovered/policycovered.component';
import { ProductcatalogueComponent } from 'src/dashboard/productcatalogue/productcatalogue.component';
import { RenewalComponent } from 'src/dashboard/renewal/renewal.component';
import { ViewallComponent } from 'src/dashboard/viewall/viewall.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Newleadform1Component } from './newleadspage/newleadform1/newleadform1.component';
import { QuotaionComponent } from './quotaion/quotaion.component';




const routes: Routes = [
 {path:"",redirectTo:'dashboard',pathMatch: 'full'},
 {path:"applicants",component:ViewallComponent},
 {path:"dashboard",component:DashboardComponent},
{path:"newleads",component:NewleadsComponent},
{path:"renewal",component:RenewalComponent},
{path:"expired",component:ExpiredComponent},
{path:"products",component:ProductcatalogueComponent,pathMatch:"full"},
{path:"health",component:HealthinsuranceComponent},
{path:"applicantdetail",component:ApplicationdetailsComponent,pathMatch:"full"},
{path:"ADDNEWLEAD",component:Newleadform1Component},
{path:"cgprotect",component:CgprotectComponent},
{path:"newleadsrow",component:NewleadsrowclikComponent},
{path:"policycovered",component:PolicycoveredComponent},
{path:"quotation",component:QuotaionComponent}


];




@NgModule({
imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]

})

export class AppRoutingModule { }