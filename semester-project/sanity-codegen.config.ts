import { SanityCodegenConfig } from "sanity-codegen";
const { defaultBabelOptions } = require("sanity-codegen/cli");

const config: SanityCodegenConfig = {
  schemaPath: "./src/sanity_portfolio/schemas/schema.js",
  outputPath: "./src/types/schema-types.ts",

  // NOTE: The CLI ships with a pre-configured babel config that shims out
  // the Sanity parts system. This babel config does not read from any
  // `.babelrc` or `babel.config.js`. You can only configure extra babel
  // options here.
  babelOptions: defaultBabelOptions, // (optional)
};

export default config;
