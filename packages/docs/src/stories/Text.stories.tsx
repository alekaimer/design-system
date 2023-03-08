import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ak-design-system/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: `Loren ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget aliquam tincidunt, nisl nisl aliquam nisl sit amet aliquam nunc nisl eget nisl.`,
  },
  argTypes: {
    as: {
      control: {
        type: 'inline-radio',
        options: ['p', 'span', 'strong', 'em', 'small', 's', 'u'],
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o text sempre será um `p`, mas você pode customizar isso passando o `as` prop.',
      },
    },
  },
}
