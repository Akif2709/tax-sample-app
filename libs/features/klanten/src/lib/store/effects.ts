import { HttpErrorResponse } from '@angular/common/http';
import { AdviesSignalenService } from '@tax-sample-app/core';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import {
  klantFetch,
  klantFetchSuccess,
  klantFetchFail,
  adviesSignalDetailsFetch,
  adviesSignalDetailsFetchfail,
  adviesSignalklantDetailsFetchSuccess,
} from './actions';

@Injectable()
export class KlantenEffects {
  constructor(private readonly actions$: Actions, private readonly adviesSignalenService: AdviesSignalenService) {}

  fetchKlant = createEffect(
    (): Observable<Action> =>
      this.actions$.pipe(
        ofType(klantFetch),
        exhaustMap(() => {
          return this.adviesSignalenService.getKlant().pipe(
            map(klant => klantFetchSuccess({ klant })),
            catchError((err: HttpErrorResponse) => of(klantFetchFail(err))),
          );
        }),
      ),
  );

  fetchAdviesSignalDetails = createEffect(
    (): Observable<Action> =>
      this.actions$.pipe(
        ofType(adviesSignalDetailsFetch),
        exhaustMap(store => {
          return this.adviesSignalenService.getAdviceSignalenById(store.id).pipe(
            map(adviesSignalDetails => adviesSignalklantDetailsFetchSuccess({ adviesSignal: adviesSignalDetails })),
            catchError(err => of(adviesSignalDetailsFetchfail(err))),
          );
        }),
      ),
  );
}
