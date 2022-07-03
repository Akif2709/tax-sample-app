import { AdviesSignal } from '@tax-sample-app/core';

export interface GroupedAdviesSignalen {
  [key: string]: Array<AdviesSignal>;
}

export interface KlantWithGroupedAdviesSignalen {
  ClientName: string;
  BsnFi: string;
  AdviceSignals: GroupedAdviesSignalen;
}
