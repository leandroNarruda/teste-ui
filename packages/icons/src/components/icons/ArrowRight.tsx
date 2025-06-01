import type { SVGProps } from 'react'
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 17"
    {...props}
  >
    <path
      fill="#fff"
      d="M8 .5 6.59 1.91l5.58 5.59H0v2h12.17l-5.58 5.59L8 16.5l8-8z"
    />
  </svg>
)
export default SvgArrowRight
