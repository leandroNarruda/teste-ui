import type { SVGProps } from 'react'
const SvgArrowSort = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.54}
      d="m12 6-1.057-1.057L6.75 9.128V0h-1.5v9.128L1.065 4.935 0 6l6 6z"
    />
  </svg>
)
export default SvgArrowSort
