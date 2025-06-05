import { FC, ReactNode, useState } from 'react'
import { styled } from '../styles'
import { ColorTokens, Icon, IconName } from '@adalove-ui/icons'
import { Text } from './Text'

const StyledTabContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  variants: {
    direction: {
      vertical: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      horizontal: {
        flexDirection: 'column',
      },
    },
  },
})

const StyledTabWrapper = styled('div', {
  display: 'flex',
  gap: '$8',

  variants: {
    direction: {
      vertical: {
        flexDirection: 'column',
        gap: '$3',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },
  },
})

const StyledTab = styled('button', {
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '$3',
  paddingRight: '$3',
  height: '$12',
  borderRadius: '$xs',
  gap: '$2',
  border: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.2s ease-in-out',
  position: 'relative',

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '9px',
    left: '8px',
    right: '8px',
    // width: '100%',
    height: '2px',
    backgroundColor: '$gray90',
    transform: 'scaleX(0)',
    transition: 'transform 0.2s ease-in-out',
  },

  '&:hover': {
    // opacity: 0.8,
    backgroundColor: '$roxo20',
  },

  '&:focus': {
    outline: '2px solid $gray90',
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
        backgroundColor: '$gray90',
        color: '$gray05',
      },
      outlined: {
        backgroundColor: 'transparent',
        border: '1px solid $gray90',
        color: '$gray90',
      },
      text: {
        backgroundColor: 'transparent',
        color: '$gray90',
      },
    },
    active: {
      true: {
        '&::after': {
          transform: 'scaleX(1)',
        },
      },
    },
  },
})

export interface ITab {
  onClick?: () => void
  disabled?: boolean
  variant?: 'contained' | 'outlined' | 'text'
  color?: ColorTokens
  leftIcon?: IconName
  rightIcon?: IconName
  label: string
}

export const Tab: FC<{
  tabs: ITab[]
  children?: ReactNode[]
  direction?: 'vertical' | 'horizontal'
}> = ({ tabs, children, direction = 'horizontal' }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <StyledTabContainer direction={direction}>
      <StyledTabWrapper direction={direction}>
        {tabs.map((tab, index) => (
          <StyledTab
            key={index}
            onClick={() => {
              setActiveTab(index)
              tab.onClick?.()
            }}
            disabled={tab.disabled}
            aria-disabled={tab.disabled}
            variant={'text'}
            active={activeTab === index}
          >
            {tab.leftIcon && <Icon {...tab} name={tab.leftIcon} />}

            {/* {tab.label && tab.label} */}
            <Text type="subtitle1" color={'gray90'}>
              {tab.label}
            </Text>

            {tab.rightIcon && <Icon {...tab} name={tab.rightIcon} />}
          </StyledTab>
        ))}
      </StyledTabWrapper>

      {children && children[activeTab]}
    </StyledTabContainer>
  )
}
