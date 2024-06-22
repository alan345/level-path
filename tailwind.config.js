import { white, blue, purple, red} from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
]
export const theme = {
  extend: {},
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    'white': white,
    'blue': blue,
    'purple': purple,
    'red': red,
    'primary': '#193512',
  }
}
export const plugins = []