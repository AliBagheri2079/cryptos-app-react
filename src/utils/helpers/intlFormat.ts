type FormatFC<T> = (language: string) => T;

const narrowTimeFormat: FormatFC<Intl.RelativeTimeFormat> = language => {
  return new Intl.RelativeTimeFormat(language, {
    style: 'narrow',
  });
};

const currencyNumberFormat: FormatFC<Intl.NumberFormat> = language => {
  return new Intl.NumberFormat(language, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
};

const percentUnitFormat: FormatFC<Intl.NumberFormat> = language => {
  return new Intl.NumberFormat(language, {
    style: 'percent',
    signDisplay: 'exceptZero',
  });
};

const celsiusUnitFormat: FormatFC<Intl.NumberFormat> = language => {
  return new Intl.NumberFormat(language, {
    style: 'unit',
    unit: 'celsius',
    notation: 'compact',
    maximumFractionDigits: 0,
  });
};

const shortCompactFormat: FormatFC<Intl.NumberFormat> = language => {
  return new Intl.NumberFormat(language, {
    notation: 'compact',
    compactDisplay: 'short',
  });
};

const speedUnitFormat: FormatFC<Intl.NumberFormat> = language => {
  return new Intl.NumberFormat(language, {
    style: 'unit',
    unit: 'kilometer-per-hour',
  });
};

export {
  narrowTimeFormat,
  currencyNumberFormat,
  percentUnitFormat,
  celsiusUnitFormat,
  shortCompactFormat,
  speedUnitFormat,
};
