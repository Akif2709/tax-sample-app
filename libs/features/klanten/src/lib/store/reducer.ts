import { createReducer, on } from '@ngrx/store';
import { initialState } from '../constants/store-constants';

import {
  klantFetchFail,
  klantFetchSuccess,
  setSelectedYear,
  adviesSignalklantDetailsFetchSuccess,
  adviesSignalDetailsFetchfail,
  klantFetch,
  adviesSignalDetailsFetch,
} from './actions';

export const KlantenReducer = createReducer(
  initialState,
  on(klantFetchSuccess, (state, { klant }) => ({
    ...state,
    klant,
    loading: false,
    serverError: undefined,
  })),
  on(klantFetch, state => ({
    ...state,
    loading: true,
  })),
  on(klantFetchFail, (state, { error }) => ({
    ...state,
    klant: undefined,
    loading: false,
    serverError: error,
  })),
  on(setSelectedYear, (state, { selectedYear }) => ({
    ...state,
    selectedAdviesSignalYear: selectedYear,
  })),
  on(adviesSignalklantDetailsFetchSuccess, (state, { adviesSignal }) => ({
    ...state,
    adviesSignalDetails: adviesSignal,
  })),
  on(adviesSignalDetailsFetch, state => ({
    ...state,
    loading: true,
  })),
  on(adviesSignalDetailsFetchfail, (state, { error }) => ({
    ...state,
    serverError: error,
    loading: false,
  })),
);
