import type { SVGProps } from 'react'
const SvgChevronsUpDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 120 40"
    {...props}
  >
    <path
      stroke="#2D253F"
      strokeLinecap="round"
      strokeWidth={3}
      d="m48 22.082 12 12 12-12"
    />
  </svg>
)
export default SvgChevronsUpDefault
