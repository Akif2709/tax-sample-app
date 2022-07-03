import { AdviesSignal, Klant } from './../models/klant.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';
import { mapAdviceSignals, mapDateToIsoString } from '../utils/generic-utils';

@Injectable({
  providedIn: 'root',
})
export class AdviesSignalenService {
  constructor(private readonly httpClient: HttpClient) {}

  /**
   * Http call to return user data
   */
  getKlant(): Observable<Klant | undefined> {
    return this.httpClient.get<Klant>('assets/advice-mock-data.json').pipe(shareReplay(1), map(mapAdviceSignals));
  }

  /**
   * Http call to return advice signal by id
   */
  getAdviceSignalenById(id: string): Observable<AdviesSignal | undefined> {
    return this.httpClient.get<Klant>('assets/advice-mock-data.json').pipe(
      shareReplay(1),
      map((customer: Klant) => this.filteradviceSignalsById(customer, id)),
    );
  }

  private filteradviceSignalsById(klant: Klant, id: string): AdviesSignal | undefined {
    const item = klant.AdviceSignals.find(adviceSignal => id === adviceSignal.id);

    return (
      item &&
      ({
        ...item,
        CreateDate: mapDateToIsoString(item.CreateDate),
      } as AdviesSignal)
    );
  }
}
