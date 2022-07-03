import { KlantenState } from './../models/store.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { klantFetch, adviesSignalDetailsFetch } from './actions';
import { selectAdviesSignalDetails, selectKlant, selectSelectedYear } from './selectors';
import { AdviesSignal, Klant } from '@tax-sample-app/core';

@Injectable()
export class KlantenStoreService {
  /**
   * klant stream
   */
  readonly klant$: Observable<Klant | undefined> = this.store.select(selectKlant);
  /**
   * adviseSignal Details stream
   */
  readonly adviseSignalDetails$: Observable<AdviesSignal | undefined> = this.store.select(selectAdviesSignalDetails);
  /**
   * selected advies signal year
   */
  readonly selectedAdviesSignalYear$: Observable<string | undefined> = this.store.select(selectSelectedYear);

  constructor(private readonly store: Store<KlantenState>) {}

  /**
   * Method to set klant by fetching from endpoint
   */
  fetchKlant() {
    this.store.dispatch(klantFetch());
  }
  /**
   * Method to set adviessignal by fetching from endpoint
   */
  fetchAdviesSignalDetails(id: string) {
    this.store.dispatch(adviesSignalDetailsFetch({ id }));
  }
}
