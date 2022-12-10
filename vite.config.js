import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/vite-plugin-vue-i18n'
import UnoCSS from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetWind from '@unocss/preset-wind'
import { presetWebFonts } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

console.log(
  'includes',
  resolve(dirname(fileURLToPath(import.meta.url)), './locales/**')
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    UnoCSS({
      transformers: [transformerDirectives()],
      presets: [
        presetWind(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
        presetWebFonts({
          fonts: {
            mono: ['Fira Code'],
            serif: ['Noto Serif'],
            sans: ['Noto Sans'],
          },
        }),
      ],
      extendTheme: theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          green: '#42b883',
        },
      }),
    }),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './locales/**'),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
