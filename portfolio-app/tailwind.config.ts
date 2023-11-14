import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'


const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [typography(), forms()],
}
export default config
