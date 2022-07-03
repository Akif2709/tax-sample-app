import { DossierComponent } from './views/dossier/dossier.component';
import { AdviesSignalenDetailsComponent } from './views/advies-signalen/advies-signal-details/advies-signalen-details.component';
import { AdviesSignalenListComponent } from './views/advies-signalen/advies-signalen-list/advies-signalen-list.component';
import { CoreModule } from '@tax-sample-app/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OverzichtComponent } from './views/overzicht/overzicht.component';
import { FeaturesKlantenComponent } from './features-klanten.component';
import { KlantenTransferStoreModule } from './store/store.module';
import { AdviesSignalenModule } from './views/advies-signalen/advies-signalen.module';
import { OverzichtModule } from './views/overzicht/overzicht.module';
import { DossierModule } from './views/dossier/dossier.module';

const ROUTES = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'advies-signalen',
  },
  {
    path: '',
    component: FeaturesKlantenComponent,
    children: [
      {
        path: 'advies-signalen',
        component: AdviesSignalenListComponent,
        children: [
          {
            path: ':id',
            component: AdviesSignalenDetailsComponent,
          },
        ],
      },

      {
        path: 'dossier',
        component: DossierComponent,
      },
      {
        path: 'overzicht',
        component: OverzichtComponent,
      },
    ],
  },
];

const components = [SidebarComponent, FeaturesKlantenComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    CoreModule,
    KlantenTransferStoreModule,
    OverzichtModule,
    DossierModule,
    AdviesSignalenModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class FeaturesKlantenModule {}
