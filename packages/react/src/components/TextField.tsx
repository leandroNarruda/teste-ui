/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { FC, useRef, useEffect, useState, ChangeEvent, FocusEvent } from 'react'
import { styled } from '../styles'
import { Icon, IconName } from '@adalove-ui/icons'

// Styled Components
const TextFieldContainer = styled('div', {
  fontFamily: '$default',
  position: 'relative',
  marginTop: '$6',
})

const Label = styled('label', {
  position: 'absolute',
  left: '$3',
  backgroundColor: 'white',
  paddingLeft: '$2',
  paddingRight: '$2',
  fontSize: '$sm',
  color: '$gray70',
  transition: 'all 0.2s ease-in-out',
  pointerEvents: 'none',
  zIndex: 10000000,

  variants: {
    shrink: {
      true: {
        top: '-$2',
        fontSize: '$xs',
      },
      false: {
        top: '50%',
        transform: 'translateY(-50%)',
      },
    },
    error: {
      true: {
        color: '$error80',
      },
    },
    required: {
      true: {
        '&::after': {
          content: ' *',
          color: 'inherit',
        },
      },
    },
  },
})

const InputWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid $gray50',
  borderRadius: '$md',
})

const StyledInput = styled('input', {
  width: '100%',
  padding: '$4',
  fontSize: '$sm',
  lineHeight: '$lg',
  color: '$gray70',
  backgroundColor: '$white',
  border: '1px solid $gray300',
  borderRadius: '$md',
  minHeight: '56px',
  boxSizing: 'border-box',

  '&:focus': {
    outline: '2px solid $gray70',
    outlineOffset: 0,
    borderColor: 'transparent',
  },

  '&:disabled': {
    backgroundColor: '$gray100',
    color: '$gray500',
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray60',
  },

  variants: {
    error: {
      true: {
        border: '1px solid $error80',

        '&:focus': {
          outline: '2px solid $error80',
          outlineOffset: 0,
          borderColor: 'transparent',
        },
      },
    },
    hasStartAdornment: {
      true: {
        paddingLeft: '$10',
      },
    },
    hasEndAdornment: {
      true: {
        paddingRight: '$10',
      },
    },
  },
})

const AdornmentContainer = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  height: '100%',

  variants: {
    position: {
      start: {
        left: '$3',
      },
      end: {
        right: '$3',
      },
    },
  },
})

const IconButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$1',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$sm',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '$gray100',
  },

  '&:focus': {
    outline: '2px solid $blue500',
    outlineOffset: 2,
  },
})

const HelperText = styled('span', {
  display: 'block',
  marginTop: '$1',
  marginLeft: '$3',
  fontSize: '$xs',
  lineHeight: '$tight',
  color: '$gray70',
  whiteSpace: 'pre-line',

  variants: {
    error: {
      true: {
        color: '$error80',
      },
    },
  },
})

export interface FieldAdapterProps {
  value: any
  onChange: (value: any) => void
  onBlur: () => void
  name: string
  error?: string | undefined
  isTouched?: boolean
}

export interface ITextField {
  name: string
  label: any
  fieldAdapter?: FieldAdapterProps
  type?: string
  maxLength?: number
  format?: (value: string) => string
  autoComplete?: string
  onlyNumbers?: boolean
  startAdornment?: IconName
  endAdornment?: IconName
  onBlurToAutoSave?: (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) => void
  helperText?: string
  required?: boolean
  disabled?: boolean
  placeholder?: string
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const TextField: FC<ITextField> = ({
  label,
  name,
  type = 'text',
  fieldAdapter,
  maxLength,
  format,
  autoComplete = 'new-password',
  onlyNumbers,
  startAdornment,
  endAdornment,
  onBlurToAutoSave,
  onBlur: externalOnBlur,
  helperText,
  required,
  disabled,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [fieldIsDirty, setFieldIsDirty] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [controlValue, setControlValue] = useState('')

  const value = fieldAdapter ? fieldAdapter.value : controlValue

  const onChange = fieldAdapter
    ? fieldAdapter.onChange
    : (e: any) => setControlValue(e)

  const onBlur = fieldAdapter ? fieldAdapter.onBlur : () => {}

  const error = fieldAdapter ? fieldAdapter.error : null
  const isTouched = fieldAdapter ? fieldAdapter.isTouched : true

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value

    if (onlyNumbers) {
      newValue = newValue.replace(/[^0-9]/g, '')
    }

    if (format) {
      newValue = format(newValue)
    }

    onChange && onChange(newValue)
  }

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onBlur()

    if (onBlurToAutoSave && fieldIsDirty) {
      onBlurToAutoSave(e)
      setFieldIsDirty(false)
    } else if (externalOnBlur) {
      externalOnBlur(e)
    }
  }

  useEffect(() => {
    if (error && isTouched) {
      inputRef.current?.focus()
    }

    inputRef.current?.setAttribute('autoComplete', autoComplete)
  }, [error, isTouched, autoComplete])

  const showError = isTouched && !!error

  return (
    <TextFieldContainer>
      {label && (
        <Label
          shrink={true}
          error={showError}
          required={required}
          htmlFor={name}
        >
          {label}
        </Label>
      )}

      <InputWrapper>
        {startAdornment && (
          <AdornmentContainer position="start">
            <Icon name={startAdornment} width="1em" />
          </AdornmentContainer>
        )}

        <StyledInput
          ref={inputRef}
          id={showError ? 'errorField' : name}
          name={name}
          type={showPassword ? 'text' : type}
          value={value || ''}
          onChange={(e) => {
            if (value !== e.target.value && !fieldIsDirty) {
              setFieldIsDirty(true)
            }
            handleChange(e)
          }}
          onBlur={handleBlur}
          error={showError}
          hasStartAdornment={!!startAdornment}
          hasEndAdornment={!!endAdornment || type === 'password'}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete={autoComplete}
          maxLength={maxLength}
        />

        {type === 'password' ? (
          <AdornmentContainer position="end">
            <IconButton
              type="button"
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? (
                <img src="/ico/Vector.svg" alt="ver" />
              ) : (
                <img src="/ico/RemoveRedEyeFilled.svg" alt="ocultar" />
              )}
            </IconButton>
          </AdornmentContainer>
        ) : (
          endAdornment && (
            <AdornmentContainer position="end">
              <Icon name={endAdornment} width="1em" height="1em" />
            </AdornmentContainer>
          )
        )}
      </InputWrapper>

      {(helperText || (showError && error)) && (
        <HelperText error={showError}>
          {!showError
            ? helperText
            : `${helperText ? `${helperText}\n` : ''}${error}`}
        </HelperText>
      )}
    </TextFieldContainer>
  )
}
