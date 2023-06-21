export const shortName = (
  name: string,
  locales?: string | string[] | undefined,
): string =>
  name
    .trim()
    .split(' ')
    .map(item => item.at(0)?.toLocaleUpperCase(locales))
    .join('')
    .toLocaleString();
