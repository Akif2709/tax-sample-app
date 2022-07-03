import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KLANTEN_STORE_SELECTOR } from '../constants/store-constants';
import { KlantenState as State } from '../models/store.model';

const featureSelector = createFeatureSelector<State>(KLANTEN_STORE_SELECTOR);

export const selectKlant = createSelector(featureSelector, (state: State) => state['klant']);
export const selectSelectedYear = createSelector(featureSelector, (state: State) => state['selectedAdviesSignalYear']);
export const selectAdviesSignalDetails = createSelector(
  featureSelector,
  (state: State) => state['adviesSignalDetails'],
);
