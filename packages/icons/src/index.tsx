import { colors } from '@adalove-ui/tokens'
import { FC, SVGProps } from 'react'
import * as Icons from './components/icons'

// Exporta todos os ícones individualmente
export * from './components/icons'

// Define o tipo para os nomes dos ícones baseado nas chaves do objeto Icons
export type IconName = keyof typeof Icons

// Tipo para as cores disponíveis
export type ColorTokens = keyof typeof colors

// Interface para o componente de ícone
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'fill'> {
  name: IconName
  size?: string | number
  fill?: ColorTokens
}

// Componente Icon que pode renderizar qualquer ícone do pacote
export const Icon: FC<IconProps> = ({
  name,
  size,
  width,
  height,
  fill,
  ...props
}) => {
  const IconComponent = Icons[name]

  return (
    <IconComponent
      width={size || width || '1em'}
      height={size || height || '1em'}
      fill={fill ? colors[fill] : 'currentColor'}
      {...props}
    />
  )
}
