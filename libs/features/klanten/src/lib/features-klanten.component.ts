import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { KlantenStoreService } from './store/store.service';

@Component({
  templateUrl: './features-klanten.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesKlantenComponent implements OnInit {
  constructor(readonly storeService: KlantenStoreService) {}

  ngOnInit(): void {
    this.storeService.fetchKlant();
    this.storeService.fetchAdviesSignalDetails('3');
  }
}
