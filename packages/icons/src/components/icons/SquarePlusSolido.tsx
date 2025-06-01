import type { SVGProps } from 'react'
const SvgSquarePlusSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 17 17"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M15.895 0H1.755a1 1 0 0 0-1 1v14.14a1 1 0 0 0 1 1h14.14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1M3.825 7.07v2h4v4h2v-4h4v-2h-4v-4h-2v4z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgSquarePlusSolido
