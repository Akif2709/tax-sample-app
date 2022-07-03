import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Klant } from '@tax-sample-app/core';

@Component({
  selector: 'tax-sample-app-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Input() klant?: Klant;
}
