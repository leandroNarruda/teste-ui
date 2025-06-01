import { FC } from 'react'
import { styled } from '../styles'
import { App } from '@adalove-ui/icons'

const StyledButton = styled('button', {})

export const Button: FC = () => {
  return (
    <StyledButton>
      <App />
    </StyledButton>
  )
}
