import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ServiceProvidersComponent} from './service-providers/service-providers.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReportBusinessInfoComponent } from './report-business-info/report-business-info.component';


@NgModule({
  imports: [
    CommonModule, 
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AboutComponent, 
    HomeComponent, 
    ServiceProvidersComponent,
    GenerateReportComponent,
    SignInComponent,
    ReportBusinessInfoComponent    
  ],
  providers:[]
  
})
export class PagesModule { }
