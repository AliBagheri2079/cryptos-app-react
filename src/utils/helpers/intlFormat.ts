import type { IntlFormat } from '@/types/utility';

const intlFormat: IntlFormat = {
  narrowTime: language =>
    new Intl.RelativeTimeFormat(language, {
      style: 'narrow',
    }),
  currencyNumber: language =>
    new Intl.NumberFormat(language, {
      style: 'currency',
      currency: language === 'fa' ? 'IRR' : 'USD',
      maximumFractionDigits: 2,
    }),
  percentUnit: language =>
    new Intl.NumberFormat(language, {
      style: 'percent',
      signDisplay: 'exceptZero',
    }),
  celsiusUnit: language =>
    new Intl.NumberFormat(language, {
      style: 'unit',
      unit: 'celsius',
      notation: 'compact',
      maximumFractionDigits: 0,
    }),
  shortCompact: language =>
    new Intl.NumberFormat(language, {
      notation: 'compact',
      compactDisplay: 'short',
    }),
  speedUnit: language =>
    new Intl.NumberFormat(language, {
      style: 'unit',
      unit: 'kilometer-per-hour',
    }),
};

export { intlFormat };
