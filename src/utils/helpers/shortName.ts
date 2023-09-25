const shortName = (name: string, locales?: string | string[]): string =>
  name
    .trim()
    .split(' ')
    .map(item => item.charAt(0)?.toLocaleUpperCase(locales))
    .join('')
    .toLocaleString();

export { shortName };
