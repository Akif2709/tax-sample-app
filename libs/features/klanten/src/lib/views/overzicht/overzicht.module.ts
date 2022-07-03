import { CoreModule } from '@tax-sample-app/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverzichtComponent } from './overzicht.component';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [OverzichtComponent],
  exports: [OverzichtComponent],
})
export class OverzichtModule {}
