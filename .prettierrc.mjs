/** @type {import("prettier").Config} */
const prettierConfig = {
  useTabs: false,
  singleQuote: true,
  quoteProps: 'consistent',
  trailingComma: 'none',
  arrowParens: 'avoid',
  endOfLine: 'auto',
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss']
};

export default prettierConfig;
