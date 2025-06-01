import { FC } from 'react'
import { styled } from '../styles'
import { Icon } from '@adalove-ui/icons'

const StyledButton = styled('button', {})

export const Button: FC = () => {
  return (
    <StyledButton>
      <Icon name="AlarmClockSolido" size={48} fill="black" />
    </StyledButton>
  )
}
