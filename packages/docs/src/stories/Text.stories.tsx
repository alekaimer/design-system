import { Meta, StoryObj } from '@storybook/react'
import { Text } from '@ak-design-system/react'

export default {
  title: 'Text/Text',
  component: Text,
} as Meta

export const Primary: StoryObj = {
  args: {
    children: `Loren ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget aliquam tincidunt, nisl nisl aliquam nisl sit amet aliquam nunc nisl eget nisl.`,
  },
}
