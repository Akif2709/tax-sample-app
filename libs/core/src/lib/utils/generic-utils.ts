import { Klant, AdviesSignal } from './../models/klant.model';
/**
 *
 * @param date
 * @returns date iso string
 * This function turn invalid '21-01-2000' format and return a valid date format
 */
export function mapDateToIsoString(date: string): string {
  const [day, month, year] = date.split('-').map(i => Number(i));
  return new Date(year, month - 1, day).toISOString();
}

export function mapAdviceSignals(klant: Klant): Klant {
  const AdviceSignals = klant.AdviceSignals.map((signal: AdviesSignal) => ({
    ...signal,
    CreateDate: mapDateToIsoString(signal.CreateDate),
  }));

  return { ...klant, AdviceSignals };
}
