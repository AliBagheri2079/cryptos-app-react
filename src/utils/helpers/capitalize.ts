const capitalize = (text: string, locales?: string | string[]): string =>
  text
    .charAt(0)
    ?.toLocaleUpperCase(locales)
    .concat(text.slice(1)?.toLocaleLowerCase(locales));

export { capitalize };
