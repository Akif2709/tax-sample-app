import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { AdviesSignal } from '@tax-sample-app/core';

@Component({
  selector: 'tax-sample-app-advies-signal-item',
  templateUrl: './advies-signal-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdviesSignalItemComponent {
  @Input() adviesSignal?: AdviesSignal;
  @Output() selectItem = new EventEmitter<string>();

  get isSignalAlreadyRead(): boolean {
    return this.adviesSignal?.Status === 200;
  }

  selectAdviesSignal(): void {
    if (this.adviesSignal) {
      this.selectItem.emit(this.adviesSignal.id);
    }
  }
}
