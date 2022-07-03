import { HttpErrorResponse } from '@angular/common/http';

import { createAction, props } from '@ngrx/store';
import { AdviesSignal, Klant } from '@tax-sample-app/core';

export const klantFetch = createAction('[Klanten API] fetching klant');
export const klantFetchSuccess = createAction(
  '[Klanten API] klant fetched success',
  props<{ klant: Klant | undefined }>(),
);
export const klantFetchFail = createAction(
  '[Klanten API] klant fetched fail',
  props<{ error: HttpErrorResponse | undefined }>(),
);
export const setSelectedYear = createAction(
  '[UI action] set selected advies signal year',
  props<{ selectedYear: string | undefined }>(),
);

export const adviesSignalDetailsFetch = createAction(
  '[Klanten API] adviessignal details fetched fail',
  props<{ id: string }>(),
);
export const adviesSignalklantDetailsFetchSuccess = createAction(
  '[Klanten API] adviessignal details fetched fail',
  props<{ adviesSignal: AdviesSignal | undefined }>(),
);
export const adviesSignalDetailsFetchfail = createAction(
  '[Klanten API] adviessignal details fetched fail',
  props<{ error: HttpErrorResponse | undefined }>(),
);
export const adviesSignalDetailsReset = createAction('[Klanten API] adviessignal details reset');
