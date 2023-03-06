import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ak-design-system/react'

export default {
  title: 'Basics/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta<ButtonProps>

export const Medium: StoryObj<ButtonProps> = {}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
