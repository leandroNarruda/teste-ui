import { FC, ReactNode } from 'react'
import { styled } from '../styles'
import { ColorTokens } from '@adalove-ui/icons'
import { colors } from '@adalove-ui/tokens'

const StyledText = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: 'var(--color)',

  variants: {
    type: {
      display: {
        fontWeight: '$light',
        fontSize: '$4xl',
        lineHeight: '$lg',
        letterSpacing: '$3xl',
        '@mobile': {
          fontSize: '$mob-4xl',
        },
      },
      largeTitle: {
        fontWeight: '$bold',
        fontSize: '$3xl',
        lineHeight: '$lg',
        letterSpacing: '$4xs',
        '@mobile': {
          fontSize: '$mob-3xl',
        },
      },
      title1: {
        fontWeight: '$semibold',
        fontSize: '$2xl',
        lineHeight: '$lg',
        letterSpacing: '$3xs',
        '@mobile': {
          fontSize: '$mob-2xl',
        },
      },
      title2: {
        fontWeight: '$semibold',
        fontSize: '$xl',
        lineHeight: '$lg',
        letterSpacing: '$sm',
        '@mobile': {
          fontSize: '$mob-xl',
        },
      },
      title3: {
        fontWeight: '$bold',
        fontSize: '$lg',
        lineHeight: '$lg',
        letterSpacing: '$sm',
        '@mobile': {
          fontSize: '$mob-lg',
        },
      },
      subtitle1: {
        fontWeight: '$semibold',
        fontSize: '$md',
        lineHeight: '$lg',
        letterSpacing: '$xs',
        '@mobile': {
          fontSize: '$mob-md',
        },
      },
      subtitle2: {
        fontWeight: '$semibold',
        fontSize: '$sm',
        lineHeight: '$lg',
        letterSpacing: '$3xs',
        '@mobile': {
          fontSize: '$mob-sm',
        },
      },
      subtitle2Stronger: {
        fontWeight: '$extrabold',
        fontSize: '$sm',
        lineHeight: '$lg',
        letterSpacing: '$2xs',
        '@mobile': {
          fontSize: '$mob-sm',
        },
      },
      body1: {
        fontWeight: '$medium',
        fontSize: '$sm',
        lineHeight: '$lg',
        letterSpacing: '$xl',
        '@mobile': {
          fontSize: '$mob-sm',
        },
      },
      body1Stronger: {
        fontWeight: '$extrabold',
        fontSize: '$sm',
        lineHeight: '$md',
        letterSpacing: '$xl',
        '@mobile': {
          fontSize: '$mob-sm',
        },
      },
      body2: {
        fontWeight: '$medium',
        fontSize: '$xs',
        lineHeight: '$md',
        letterSpacing: '$sm',
        '@mobile': {
          fontSize: '$mob-xs',
        },
      },
      body2Stronger: {
        fontWeight: '$bold',
        fontSize: '$xs',
        lineHeight: '$md',
        letterSpacing: '$sm',
        '@mobile': {
          fontSize: '$mob-xs',
        },
      },
      button: {
        fontWeight: '$bold',
        fontSize: '$xs',
        lineHeight: '$sm',
        letterSpacing: '$2xl',
        textTransform: 'uppercase',
        '@mobile': {
          fontSize: '$mob-xs',
        },
      },
      caption: {
        fontWeight: '$regular',
        fontSize: '$2xs',
        lineHeight: '$sm',
        letterSpacing: '$md',
        '@mobile': {
          fontSize: '$mob-2xs',
        },
      },
      overline: {
        fontWeight: '$regular',
        fontSize: '$3xs',
        lineHeight: '$sm',
        letterSpacing: '$3xl',
        '@mobile': {
          fontSize: '$mob-3xs',
        },
      },
    },
  },

  defaultVariants: {
    type: 'display',
  },
})

export interface TextProps {
  children?: ReactNode
  color?: ColorTokens
  type?:
    | 'display'
    | 'largeTitle'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle2Stronger'
    | 'body1'
    | 'body1Stronger'
    | 'body2'
    | 'body2Stronger'
    | 'button'
    | 'caption'
    | 'overline'
}

export const Text: FC<TextProps> = (props) => {
  return (
    <StyledText
      type={props.type}
      color={'red'}
      css={{ '--color': props.color ? colors[props.color] : 'inherit' }}
    >
      {props.children}
    </StyledText>
  )
}
