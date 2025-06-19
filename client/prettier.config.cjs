/** @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions} */
const config = {
  semi: false,
  singleQuote: false,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
}

module.exports = config
