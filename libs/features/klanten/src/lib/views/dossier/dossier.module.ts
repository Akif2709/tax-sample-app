import { CoreModule } from '@tax-sample-app/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DossierComponent } from './dossier.component';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [DossierComponent],
  exports: [DossierComponent],
})
export class DossierModule {}
