import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ServiceProvidersComponent} from './service-providers/service-providers.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReportBusinessInfoComponent } from './report-business-info/report-business-info.component';



const pagesRoutes: Routes = [
  { path: '', component: HomeComponent},
  { 
    path: 'home', 
    component: HomeComponent,
  },
  { path: 'about', component: AboutComponent},
  { path: 'service-providers', component: ServiceProvidersComponent},
  { path: 'admin', component: SignInComponent},
  {path: 'report-business-info', component: ReportBusinessInfoComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(pagesRoutes)]
})
export class PagesRoutingModule {}
