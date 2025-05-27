import antfu from "@antfu/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default antfu({
  type: "app",
  typescript: true,
  formatters: true,
  react: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
}, {
  rules: {
    "ts/no-redeclare": "off",
    "ts/consistent-type-definitions": ["error", "interface"],
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    "node/prefer-global/process": ["off"],
    "n/no-process-env": ["error", {
      allowedVariables: ["NEXT_PUBLIC_API_URL"],
    }],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
  },
}, {
  plugins: [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
  ],
});
