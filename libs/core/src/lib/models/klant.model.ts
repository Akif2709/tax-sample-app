export interface Klant {
  ClientName: string;
  BsnFi: string;
  AdviceSignals: Array<AdviesSignal>;
}

export interface AdviesSignal {
  id: string;
  CreateDate: string;
  Title: string;
  Status: 100 | 200;
  Klantgegevens: KlantGegevens;
  Description: string;
}

export interface KlantGegevens {
  Origin: string;
  Parameters: Array<KlantParameters>;
}

export interface KlantParameters {
  ParamName: string;
  ParamValue: number;
}
