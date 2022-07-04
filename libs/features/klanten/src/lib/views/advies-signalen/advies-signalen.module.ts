import { RouterModule } from '@angular/router';
import { CoreModule } from '@tax-sample-app/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdviesSignalenListComponent } from './advies-signalen-list/advies-signalen-list.component';
import { AdviesSignalItemComponent } from '../../components/advies-signal-item/advies-signal-item.component';
import { AdviesSignalenDetailsComponent } from './advies-signal-details/advies-signalen-details.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [AdviesSignalenListComponent, AdviesSignalItemComponent, AdviesSignalenDetailsComponent];

@NgModule({
  imports: [CommonModule, CoreModule, RouterModule, ReactiveFormsModule],
  declarations: [...components],
  exports: [...components, ReactiveFormsModule],
})
export class AdviesSignalenModule {}
