import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyPageComponent } from '@tax-sample-app/core';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'klanten' },
  {
    path: 'klanten',
    loadChildren: () => import('@tax-sample-app/features/klanten').then(m => m.FeaturesKlantenModule),
  },
  { path: 'aangiften', component: EmptyPageComponent },
  { path: 'service-berichten', component: EmptyPageComponent },
  {
    path: '**',
    redirectTo: 'klanten',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
