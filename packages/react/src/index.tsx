import { colors } from '@adalove-ui/tokens'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  height: '$10',
  width: '$40',
  alignItems: 'center',
})

export function App() {
  return <h1 style={{ color: colors.black }}>olá mundo</h1>
}
