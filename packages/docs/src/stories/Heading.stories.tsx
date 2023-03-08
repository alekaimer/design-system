import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ak-design-system/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Heading example',
  },
  argTypes: {
    as: {
      control: {
        type: 'inline-radio',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: [
          'xxs',
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          '2xl',
          '4xl',
          '5xl',
          '6xl',
          '7xl',
          '8xl',
          '9xl',
        ],
      },
    },
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const CustomHeading: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas você pode customizar isso passando o `as` prop.',
      },
    },
  },
}
