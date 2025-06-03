import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
  letterSpacings,
} from '@adalove-ui/tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'

// Configuração base do Stitches
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
    letterSpacings,
  },

  media: {
    mobile: '(max-width: 900px)',
  },
})
