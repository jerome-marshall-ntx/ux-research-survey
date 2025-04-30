//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles.css',
  tailwindFunctions: ['clsx', 'cn'],
}

export default config
