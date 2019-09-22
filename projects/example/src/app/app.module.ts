import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxScrollTopModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
