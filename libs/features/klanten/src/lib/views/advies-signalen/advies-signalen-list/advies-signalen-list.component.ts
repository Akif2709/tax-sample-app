import { KlantenStoreService } from '../../../store/store.service';
import { KlantWithGroupedAdviesSignalen } from '../../../models/klant.modal';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Klant } from '@tax-sample-app/core';
import { Observable, skipWhile, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { groupAdviesSignalen, sortAdviesSignalen } from '../../../utils/mappers';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tax-sample-app-advies-signalen-list',
  templateUrl: './advies-signalen-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdviesSignalenListComponent {
  /**
   * Klant data stream
   */
  readonly klant$: Observable<KlantWithGroupedAdviesSignalen | undefined> = this.storeService.klant$.pipe(
    map((klant: Klant | undefined) => {
      if (klant) {
        const sortedAdviesSignalen = sortAdviesSignalen(klant?.AdviceSignals);
        const groupedAdviesSignalen = groupAdviesSignalen(sortedAdviesSignalen);
        return { ...klant, AdviceSignals: groupedAdviesSignalen };
      } else {
        return klant;
      }
    }),
    tap(klant => {
      if (klant) {
        this.adviesSignalenYears = Object.keys(klant.AdviceSignals).sort((a, b) => Number(b) - Number(a));
        this.selectedYear = this.adviesSignalenYears?.[0];
      }
    }),
  );

  selectedYear?: string;
  adviesSignalenYears?: Array<string>;

  constructor(
    private readonly storeService: KlantenStoreService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  setSelectedYear(value: string) {
    this.selectedYear = value;
  }

  handleSelectAdviesItem(id: string) {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }
}
