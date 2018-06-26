import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { HeaderComponent } from './pages/header/header.component';
import {ModuleRouting} from './app.routing';
import {ModalModule} from 'ngx-bootstrap';
import { HomeBusinessInfoComponent } from './user/home-business-info/home-business-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    HeaderComponent,
    HomeBusinessInfoComponent
  ],
  imports: [
    BrowserModule, ModuleRouting, ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
