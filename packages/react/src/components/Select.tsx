/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useRef, useEffect, useState, KeyboardEvent } from 'react'
import { styled } from '../styles'
import { FieldAdapterProps } from './TextField'
import { Icon } from '@adalove-ui/icons'

// Interfaces
interface OptionsProps {
  label: string | number
  value: string | number
  name?: string
}

export interface ISelect {
  name: string
  label: string
  fieldAdapter?: FieldAdapterProps
  options: Array<OptionsProps>
  multiple?: boolean
  required?: boolean
  autoSaveFunc?: (e: {
    target: { id: string; value: any; label: any }
  }) => Promise<void>
  onChangeCapture?: (e: any) => void
  filterOptions?: (
    options: OptionsProps[],
    inputValue: string,
  ) => OptionsProps[]
  disabled?: boolean
  asterisk?: boolean
  placeholder?: string
}

// Styled Components
const SelectContainer = styled('div', {
  fontFamily: '$default',
  position: 'relative',
  marginTop: '$6',
  width: '100%',
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
  zIndex: 1,

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
    disabled: {
      true: {
        opacity: 0.7,
      },
    },
  },
})

const ArrowDownIcon = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ArrowUpIcon = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 5L5 1L1 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const SelectButton = styled('button', {
  width: '100%',
  minHeight: '56px',
  padding: '0 $4',
  fontSize: '$sm',
  lineHeight: '$lg',
  color: '$gray70',
  backgroundColor: 'transparent',
  border: '1px solid $gray50',
  borderRadius: '$md',
  textAlign: 'left',
  cursor: 'pointer',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',

  '& .placeholder': {
    color: '$gray50',
  },

  '& .value': {
    color: '$gray70',
  },

  '& .icon-container': {
    display: 'flex',
    alignItems: 'center',
    color: '$gray70',
    transition: 'transform 0.2s ease',
  },

  '&:focus': {
    outline: '2px solid $gray70',
    outlineOffset: 0,
    borderColor: 'transparent',
  },

  '&:hover': {
    border: '1px solid $gray70',
  },

  '&:disabled': {
    // backgroundColor: '$gray100',
    color: '$gray500',
    cursor: 'not-allowed',
    border: '1px dotted  $gray50',
    opacity: 0.7,
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
    open: {
      true: {
        // borderBottomLeftRadius: 0,
        // borderBottomRightRadius: 0,
      },
    },
  },
})

const OptionsContainer = styled('div', {
  position: 'absolute',
  top: 'calc(100% + 2px)',
  left: 0,
  right: 0,
  backgroundColor: '$white',
  border: '1px solid $gray50',
  borderRadius: '$md',
  maxHeight: '200px',
  overflowY: 'auto',
  zIndex: 1000,
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  marginTop: 0,

  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '$gray50',
    borderRadius: '0 $md $md 0',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$gray30',
    borderRadius: '8px',
    '&:hover': {
      background: '$gray50',
    },
  },
})

const Option = styled('div', {
  padding: '$3',
  cursor: 'pointer',
  fontSize: '$sm',
  color: '$gray70',

  '&:hover': {
    backgroundColor: '$gray50',
  },

  variants: {
    selected: {
      true: {
        backgroundColor: '$gray50',
        fontWeight: 'bold',
      },
    },
  },
})

const ChipsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
  // padding: '$2',
})

const Chip = styled('div', {
  backgroundColor: '$coral80',
  color: 'white',
  padding: '$2 $3',
  borderRadius: '$full',
  fontSize: '$xs',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  margin: '$1',

  '& .remove-button': {
    background: '$coral100',
    border: 'none',
    borderRadius: '$full',
    color: 'white',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    // opacity: 0.8,
    transition: 'all 0.2s',
    // lineHeight: 0,

    '&:hover': {
      opacity: 1,
      transform: 'scale(1.2)',
    },
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

export const Select: FC<ISelect> = ({
  label,
  name,
  options,
  fieldAdapter,
  multiple = false,
  required,
  autoSaveFunc,
  onChangeCapture,
  filterOptions: customFilterOptions,
  disabled = false,
  asterisk,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [controlValue, setControlValue] = useState<any>(multiple ? [] : null)
  const containerRef = useRef<HTMLDivElement>(null)

  const value = fieldAdapter ? fieldAdapter.value : controlValue
  const onChange = fieldAdapter
    ? fieldAdapter.onChange
    : (val: any) => setControlValue(val)
  const onBlur = fieldAdapter ? fieldAdapter.onBlur : () => {}
  const error = fieldAdapter ? fieldAdapter.error : null
  const isTouched = fieldAdapter ? fieldAdapter.isTouched : true

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  const handleOptionClick = (option: OptionsProps) => {
    let newValue
    if (multiple) {
      const currentValues = Array.isArray(value) ? value : []
      const optionIndex = currentValues.findIndex(
        (v: any) => v === option.value,
      )

      if (optionIndex === -1) {
        newValue = [...currentValues, option.value]
      } else {
        newValue = currentValues.filter(
          (_: any, i: number) => i !== optionIndex,
        )
      }
    } else {
      newValue = option.value
      setIsOpen(false)
    }

    onChange(newValue)

    if (autoSaveFunc) {
      autoSaveFunc({
        target: {
          id: name,
          value: newValue,
          label: option.label,
        },
      })
    }

    if (onChangeCapture) {
      onChangeCapture({ target: { value: newValue } })
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
      onBlur()
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
      onBlur()
    }
  }

  const filteredOptions = customFilterOptions
    ? customFilterOptions(options, '')
    : options

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const showError = isTouched && !!error

  const getDisplayValue = () => {
    if (!value) return ''

    if (multiple) {
      const selectedOptions = options.filter(
        (opt) => Array.isArray(value) && value.includes(opt.value),
      )
      return selectedOptions.map((opt) => opt.label).join(', ')
    }

    const selectedOption = options.find((opt) => opt.value === value)
    return selectedOption ? selectedOption.label : ''
  }

  return (
    <SelectContainer ref={containerRef}>
      {label && (
        <Label
          shrink={true}
          error={showError}
          required={required}
          htmlFor={name}
          disabled={disabled}
        >
          {label}
          {asterisk && <span style={{ color: 'red' }}>*</span>}
        </Label>
      )}

      <SelectButton
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        error={showError}
        open={isOpen}
        disabled={disabled}
        id={showError ? 'errorField' : name}
      >
        <div
          style={{ flex: 1, display: 'flex', gap: '$2', alignItems: 'center' }}
        >
          {multiple && value && Array.isArray(value) && value.length > 0 ? (
            <ChipsContainer>
              {options
                .filter((opt) => value.includes(opt.value))
                .map((opt) => (
                  <Chip key={opt.value}>
                    {opt.label}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleOptionClick(opt)
                      }}
                      className="remove-button"
                      title="Remover"
                    >
                      <Icon name="XSolido" size={9} color="white" />
                    </button>
                  </Chip>
                ))}
            </ChipsContainer>
          ) : (
            <div className={value ? 'value' : 'placeholder'}>
              {getDisplayValue() || placeholder}
            </div>
          )}
        </div>

        <div className="icon-container">
          {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
      </SelectButton>

      {isOpen && (
        <OptionsContainer>
          {filteredOptions.map((option) => (
            <Option
              key={option.value}
              onClick={() => handleOptionClick(option)}
              selected={
                multiple
                  ? Array.isArray(value) && value.includes(option.value)
                  : value === option.value
              }
            >
              {option.label}
            </Option>
          ))}
        </OptionsContainer>
      )}

      {showError && error && <HelperText error={showError}>{error}</HelperText>}
    </SelectContainer>
  )
}
