import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { KLANTEN_STORE_SELECTOR } from '../constants/store-constants';
import { KlantenEffects } from './effects';
import { KlantenReducer } from './reducer';
import { KlantenStoreService } from './store.service';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature(KLANTEN_STORE_SELECTOR, KlantenReducer), EffectsModule.forFeature([KlantenEffects])],
  providers: [KlantenStoreService],
})
export class KlantenTransferStoreModule {}
