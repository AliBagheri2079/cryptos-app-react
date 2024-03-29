module.exports = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  bracketSpacing: true,
  useTabs: false,
  endOfLine: 'auto',
  singleAttributePerLine: false,
  bracketSameLine: false,
  jsxSingleQuote: true,
  quoteProps: 'as-needed',
  semi: true,
  importOrder: [
    '^@core/(.*)$',
    '^@server/(.*)$',
    '^@ui/(.*)$',
    '^(..|.||@|$)/(.*)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'jsx'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  pluginSearchDirs: false,
};
