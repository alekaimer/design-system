import { styled } from './styles'

const Heading = styled('h1', {
  color: '$red',
  fontSize: '$5',
  fontWeight: '$bold',
  lineHeight: 1.1,
  margin: 0,
  padding: 0,
})

export function App() {
  return <Heading>Hello World</Heading>
}
