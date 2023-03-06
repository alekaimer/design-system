import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  backgroundColor: '$gray100',
  color: '$gray900',
  fontFamily: '$default',
  lineHeight: 1,
  padding: '$1 $2',
  borderRadius: '$px',
  border: '1px solid $gray200',
  cursor: 'pointer',
  transition: 'all 100ms ease-out',

  variants: {
    size: {
      small: {
        fontSize: '$xs',
        padding: '$1 $1',
      },
      medium: {
        fontSize: '$sm',
        padding: '$1 $2',
      },
      large: {
        fontSize: '$lg',
        padding: '$2 $3',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
