import type { SVGProps } from 'react'
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 17"
    {...props}
  >
    <path
      fill="#2D253F"
      d="M16 7.5H3.83l5.59-5.59L8 .5l-8 8 8 8 1.41-1.41L3.83 9.5H16z"
    />
  </svg>
)
export default SvgArrowLeft
