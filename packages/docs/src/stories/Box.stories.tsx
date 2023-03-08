import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Heading, Text } from '@ak-design-system/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <div>
        <Heading>Lorem</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eius
          animi velit ullam quod nihil neque provident autem, quia doloribus?
          Soluta debitis repudiandae id labore odit, nisi nam voluptatum atque.
        </Text>
      </div>
    ),
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const CustomBox: StoryObj<BoxProps> = {
  args: {
    as: 'section',
    children: (
      <>
        <Text>
          Este Box é uma tag <Text as="i">&quot;section&quot;</Text>, e não mais
          uma div por padrão.
        </Text>
        <Text>
          Isso é possível porque o componente Box é um wrapper do styled-system,
          que permite que você passe uma propriedade <i>&quot;as&quot;</i> para
          definir qual tag você quer usar.
        </Text>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o Box sempre será uma `div`, mas você pode customizar isso passando o `as` prop.',
      },
    },
  },
  argTypes: {
    as: {
      control: {
        type: 'inline-radio',
        options: [
          'div',
          'span',
          'footer',
          'header',
          'main',
          'section',
          'article',
          'aside',
        ],
      },
    },
  },
}
