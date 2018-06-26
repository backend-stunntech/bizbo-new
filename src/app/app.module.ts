import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { HeaderComponent } from './component/header/header.component';
import {ModuleRouting} from './app.routing';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, ModuleRouting, ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
