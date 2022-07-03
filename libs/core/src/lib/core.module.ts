import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [EmptyPageComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [EmptyPageComponent, NavbarComponent],
})
export class CoreModule {}
