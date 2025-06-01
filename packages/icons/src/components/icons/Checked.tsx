import type { SVGProps } from 'react'
const SvgChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#251E33"
      fillRule="evenodd"
      d="M4 0a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm13.707 5.707a1 1 0 0 0-1.414-1.414L7.5 13.086 3.707 9.293a1 1 0 0 0-1.414 1.414l4.5 4.5a1 1 0 0 0 1.414 0z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgChecked
