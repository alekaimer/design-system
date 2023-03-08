import { ComponentProps } from 'react'
import { styled } from '../styles'

const ButtonStyled = styled('button', {
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

  '&:hover': {
    backgroundColor: '$gray200',
  },

  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px $colors$gray300',
  },

  '&:active': {
    backgroundColor: '$gray300',
  },

  '&:disabled': {
    backgroundColor: '$gray100',
    color: '$gray500',
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'medium',
  },
})

export type ButtonProps = ComponentProps<typeof ButtonStyled>

export function Button(props: ButtonProps) {
  return <ButtonStyled {...props} />
}
