import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AboutComponent} from './component/about/about.component';
import {HomeComponent} from './component/home/home.component';
import {ServiceComponent} from './component/service/service.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service' , component: ServiceComponent }
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forRoot(routes);
