type Option<T> = (language: string) => T;

type IntlFormat = {
  narrowTime: Option<Intl.RelativeTimeFormat>;
  currencyNumber: Option<Intl.NumberFormat>;
  percentUnit: Option<Intl.NumberFormat>;
  celsiusUnit: Option<Intl.NumberFormat>;
  shortCompact: Option<Intl.NumberFormat>;
  speedUnit: Option<Intl.NumberFormat>;
};

export type { IntlFormat };
