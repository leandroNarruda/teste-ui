import { FC } from 'react'
import { styled } from '../styles'
import { ColorTokens, Icon, IconName, iconNames } from '@adalove-ui/icons'
import { colors } from '@adalove-ui/tokens'

const StyledButton = styled('button', {
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '$3',
  paddingBottom: '$3',
  paddingLeft: '$5',
  paddingRight: '$5',
  borderRadius: '$lg',
  gap: '$2',
  border: 'none',
  fontSize: '$xs',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'opacity 0.2s ease-in-out',

  '&:hover': {
    opacity: 0.8,
  },

  '&:focus': {
    outline: '2px solid var(--color)',
    outlineOffset: 0,
    borderColor: 'transparent',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  variants: {
    variant: {
      contained: {
        backgroundColor: 'var(--color)',
        color: '$gray05',
      },
      outlined: {
        backgroundColor: 'transparent',
        border: '1px solid var(--color)',
        color: 'var(--color)',
      },
      text: {
        backgroundColor: 'transparent',
        color: 'var(--color)',
      },
    },
  },
})

export interface ButtonProps {
  onClick: () => void
  disabled: boolean
  variant: 'contained' | 'outlined' | 'text'
  color: ColorTokens
  leftIcon: IconName
  rightIcon: IconName
  label: string
}

export const Button: FC<ButtonProps> = (props) => {
  console.log('iconNames: ', iconNames)
  return (
    <StyledButton
      onClick={props.onClick}
      disabled={props.disabled}
      aria-disabled={props.disabled}
      style={{ backgroundColor: props.color }}
      css={{ '--color': props.color ? colors[props.color] : 'inherit' }}
      variant={props.variant || 'contained'}
      // color={props.color || 'roxo'}
    >
      {props.leftIcon && <Icon {...props} name={props.leftIcon} />}

      {props.label && props.label}

      {props.rightIcon && <Icon {...props} name={props.rightIcon} />}
    </StyledButton>
  )
}
