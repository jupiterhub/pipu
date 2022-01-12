const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  // purge: createGlobPatternsForDependencies(__dirname),
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
};
