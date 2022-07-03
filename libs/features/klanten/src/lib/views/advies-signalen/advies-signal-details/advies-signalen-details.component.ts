import { ActivatedRoute, Router } from '@angular/router';
import { KlantenStoreService } from './../../../store/store.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AdviesSignal } from '@tax-sample-app/core';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'tax-sample-app-advies-signalen-details',
  templateUrl: './advies-signalen-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdviesSignalenDetailsComponent implements OnInit {
  readonly adviesSignalDetails$?: Observable<AdviesSignal | undefined> = this.storeService.adviseSignalDetails$.pipe(
    tap(console.log),
  );

  constructor(
    private storeService: KlantenStoreService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.fetchAdviesSignalDetails();
    this.storeService.adviseSignalDetails$.subscribe(console.log);
  }

  private fetchAdviesSignalDetails() {
    const itemID = this.activatedRoute.snapshot.params['id'];
    console.log(itemID);
    this.storeService.fetchAdviesSignalDetails(itemID);
  }

  closeModal() {
    this.router.navigate(['../..'], { relativeTo: this.activatedRoute });
  }
}
