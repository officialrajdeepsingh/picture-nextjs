import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {},
  plugins: [],
} satisfies Config

export default config