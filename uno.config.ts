import { defineConfig, presetWind3, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons(),
  ],
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',
    'section-py': 'py-16 sm:py-20 lg:py-24',
    'container': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      heading: ['Outfit', 'sans-serif'],
    },
  },
})
