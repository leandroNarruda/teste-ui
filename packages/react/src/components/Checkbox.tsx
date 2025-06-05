import { ChangeEvent, FC, useState } from 'react'
import { styled } from '../styles'
import { FieldAdapterProps } from './TextField'

export interface ICheckbox {
  label?: string
  onClick?: () => void
  disabled?: boolean
  fieldAdapter?: FieldAdapterProps
  name?: string
}

const CheckboxWrapper = styled('label', {
  fontFamily: '$default',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  gap: '$xs',
  padding: '$2',
  userSelect: 'none',
  color: '$gray70',
  fontSize: '$sm',
  width: 'fit-content',

  '@mobile': {
    fontSize: '$mob-sm',
    padding: '$0.5',
  },

  '&:focus': {
    outline: '2px solid $gray70',
    outlineOffset: 0,
    borderColor: 'transparent',
  },

  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.6,
      },
    },
    focused: {
      true: {
        outline: '2px solid $gray70',
        borderRadius: '$xs',
        outlineOffset: 0,
        borderColor: 'transparent',
      },
    },
  },
})

const HiddenCheckbox = styled('input', {
  border: 0,
  clip: 'rect(0 0 0 0)',
  clippath: 'inset(50%)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
})

const StyledCheckbox = styled('span', {
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '20px',
  height: '20px',
  '@mobile': {
    width: '16px',
    height: '16px',
  },
  background: '$white',
  border: '1.5px solid $gray70',
  borderRadius: '$xs',
  transition: 'all 150ms',

  '&:hover': {
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      backgroundColor: 'rgba(128, 128, 128, 0.1)',
      zIndex: -1,
    },
  },

  variants: {
    checked: {
      true: {
        background: '$roxo100',
        borderColor: '$roxo100',
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',

        '&:hover::after': {
          display: 'none',
        },
      },
    },
    hasError: {
      true: {
        borderColor: '$error80',
      },
    },
    focused: {
      true: {
        outline: '2px solid $gray70',
        borderRadius: '$xs',
        outlineOffset: 0,
        borderColor: 'transparent',
      },
    },
  },

  compoundVariants: [
    {
      checked: true,
      disabled: true,
      css: {
        background: '$gray60',
        borderColor: '$gray60',
      },
    },
  ],
})

const ErrorText = styled('div', {
  fontFamily: '$default',
  fontSize: '$xs',
  lineHeight: '$tight',
  color: '$error80',
  marginTop: '$2xs',
  marginLeft: '$3',
})

export const Checkbox: FC<ICheckbox> = (props) => {
  const [controlValue, setControlValue] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const value = props.fieldAdapter ? props.fieldAdapter.value : controlValue
  const onChange = props.fieldAdapter
    ? props.fieldAdapter.onChange
    : (newValue: boolean) => setControlValue(newValue)
  const error = props.fieldAdapter ? props.fieldAdapter.error : null
  const isTouched = props.fieldAdapter ? props.fieldAdapter.isTouched : true

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked
    onChange && onChange(newValue)
  }

  const hasError = Boolean(error && isTouched)

  return (
    <div>
      <CheckboxWrapper disabled={props.disabled} focused={isFocused}>
        <HiddenCheckbox
          type="checkbox"
          checked={value}
          onChange={handleChange}
          disabled={props.disabled}
          name={props.name}
          id={props.name}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <StyledCheckbox
          checked={value}
          disabled={props.disabled}
          hasError={hasError}
          aria-checked={value}
        >
          {value && (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M4 9L8 13L14 6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </StyledCheckbox>
        {props.label && <span style={{ marginLeft: 8 }}>{props.label}</span>}
      </CheckboxWrapper>
      {hasError && <ErrorText>{error}</ErrorText>}
    </div>
  )
}
