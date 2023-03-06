import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  opacity,
  radii,
  space,
} from '@ak-design-system/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  prefix,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'Ïspace',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    opacities: opacity,
    radii,
    space,
  },
})
