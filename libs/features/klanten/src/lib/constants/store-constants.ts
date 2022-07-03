import { KlantenState } from '../models/store.model';

export const KLANTEN_STORE_SELECTOR = 'klanten-store';

export const initialState: KlantenState = {
  klant: undefined,
  selectedAdviesSignalYear: undefined,
  adviesSignalDetails: undefined,
  loading: false,
  serverError: undefined,
};
