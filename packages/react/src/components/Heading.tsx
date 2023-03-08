import { ComponentProps } from 'react'
import { styled } from '../styles'

export const HeadingStyled = styled('h2', {
  fontWeight: '$bold',
  fontFamily: '$heading',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})

export interface HeadingProps extends ComponentProps<typeof HeadingStyled> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Heading({ as, size, ...props }: HeadingProps) {
  return (
    <HeadingStyled as={as} size={size} {...props}>
      {props.children}
    </HeadingStyled>
  )
}
