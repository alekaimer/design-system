import { ComponentProps } from 'react'
import { styled } from '../styles'

export const BoxStyled = styled('div', {
  padding: '$3',
  borderRadius: '$px',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends ComponentProps<typeof BoxStyled> {
  as:
    | 'div'
    | 'span'
    | 'header'
    | 'footer'
    | 'main'
    | 'section'
    | 'article'
    | 'aside'
}

export function Box({ as = 'div', ...props }: BoxProps) {
  return <BoxStyled as={as} {...props} />
}
