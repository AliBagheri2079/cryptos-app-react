/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-preset-env': {
      /* use stage 3 features + css nesting rules */
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-selectors': { preserve: true },
      },
    },
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},

    ...(process.env.NODE_ENV === 'production'
      ? {
          autoprefixer: {},
          cssnano: { preset: 'default' },
        }
      : {}),
  },
};
