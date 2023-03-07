import { Meta, StoryObj } from '@storybook/react'
import { Heading } from '@ak-design-system/react'

export default {
  title: 'Text/Heading',
  component: Heading,
} as Meta

export const Primary: StoryObj = {
  args: {
    children: 'Hello World',
  },
}
