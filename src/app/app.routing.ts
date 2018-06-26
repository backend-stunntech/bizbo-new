import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AboutComponent} from './pages/about/about.component';
import {HomeComponent} from './pages/home/home.component';
import {ServiceComponent} from './pages/service/service.component';
import {HomeBusinessInfoComponent} from './user/home-business-info/home-business-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service' , component: ServiceComponent },
  { path: 'report-business-info', component: HomeBusinessInfoComponent}
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forRoot(routes);
