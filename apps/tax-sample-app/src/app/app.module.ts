import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@tax-sample-app/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, StoreModule.forRoot({}), EffectsModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
