import { AdviesSignal } from '@tax-sample-app/core';
import { GroupedAdviesSignalen } from '../models/klant.modal';

export function groupAdviesSignalen(adviceSignals: Array<AdviesSignal>): GroupedAdviesSignalen {
  const getYear = (date: string) => new Date(date).getFullYear();

  return adviceSignals.reduce((result, item) => {
    const year = getYear(item.CreateDate).toString();
    if (result[year]) {
      result[year].push(item);
    } else {
      result = { ...result, [year]: [item] };
    }
    return result;
  }, {} as GroupedAdviesSignalen);
}

export function sortAdviesSignalen(adviceSignals: Array<AdviesSignal>): Array<AdviesSignal> {
  const getTime = (date: string) => new Date(date).getTime();
  return adviceSignals?.slice().sort((a, b) => getTime(b.CreateDate) - getTime(a.CreateDate));
}
