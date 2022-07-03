import { HttpErrorResponse } from '@angular/common/http';
import { AdviesSignal, Klant } from '@tax-sample-app/core';

export interface KlantenState {
  klant?: Klant;
  selectedAdviesSignalYear?: string;
  adviesSignalDetails?: AdviesSignal;
  loading: boolean;
  serverError: HttpErrorResponse | undefined;
}
