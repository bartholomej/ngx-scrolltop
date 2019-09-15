import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxScrolltopModule } from 'ngx-scrolltop';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxScrolltopModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
