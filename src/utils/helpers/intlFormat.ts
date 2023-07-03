const narrowFormat: Intl.RelativeTimeFormat = new Intl.RelativeTimeFormat(
  'en',
  {
    style: 'narrow',
  },
);

const currencyFormat: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
});

const percentFormat: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
  style: 'percent',
  signDisplay: 'exceptZero',
});

const celsiusFormat: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'celsius',
  notation: 'compact',
  maximumFractionDigits: 0,
});

const shortFormat: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short',
});

const speedFormat: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'kilometer-per-hour',
});

export {
  narrowFormat,
  currencyFormat,
  percentFormat,
  celsiusFormat,
  shortFormat,
  speedFormat,
};
