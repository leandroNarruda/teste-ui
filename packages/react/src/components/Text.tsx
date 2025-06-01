import { FC, ReactNode } from 'react'
import { styled } from '../styles'

const StyledText = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,

  variants: {
    type: {
      display: {
        fontWeight: 300,
        fontSize: '$lg',
      },
      largeTitle: {
        fontWeight: 700,
        fontSize: '4.8rem',
      },
      title1: {
        fontWeight: 600,
        fontSize: '3.2rem',
      },
      title2: {
        fontWeight: 600,
        fontSize: '2.8rem',
      },
      title3: {
        fontWeight: 700,
        fontSize: '2.2rem',
      },
      subtitle1: {
        fontWeight: 600,
        fontSize: '2.0rem',
      },
      subtitle2: {
        fontWeight: 600,
        fontSize: '1.6rem',
      },
      subtitle2Stronger: {
        fontWeight: 800,
        fontSize: '1.6rem',
      },
      body1: {
        fontWeight: 500,
        fontSize: '1.6rem',
      },
      body1Stronger: {
        fontWeight: 800,
        fontSize: '1.6rem',
      },
      body2: {
        fontWeight: 500,
        fontSize: '1.4rem',
      },
      body2Stronger: {
        fontWeight: 700,
        fontSize: '1.4rem',
      },
      button: {
        fontWeight: 700,
        fontSize: '1.4rem',
        textTransform: 'uppercase',
      },
      caption: {
        fontWeight: 400,
        fontSize: '1.2rem',
      },
      overline: {
        fontWeight: 400,
        fontSize: '1.2rem',
      },
    },
  },

  defaultVariants: {
    type: 'Body1',
  },
})

export interface TextProps {
  children?: ReactNode
}

export const Text: FC<TextProps> = (props) => {
  return <StyledText type={'body1'}>{props.children}</StyledText>
}
