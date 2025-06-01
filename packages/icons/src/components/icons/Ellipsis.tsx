import type { SVGProps } from 'react'
const SvgEllipsis = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      fill="#5E586B"
      d="M8.428 20a3 3 0 1 1 6 0 3 3 0 0 1-6 0M17 20a3 3 0 1 1 6 0 3 3 0 0 1-6 0m11.571-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
    />
  </svg>
)
export default SvgEllipsis
