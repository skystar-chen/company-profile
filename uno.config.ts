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
  },
})
