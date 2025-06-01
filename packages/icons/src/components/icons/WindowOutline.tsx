import type { SVGProps } from 'react'
const SvgWindowOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      fill="#B3B3C3"
      d="M0 7.5c0-2.758 2.242-5 5-5h30c2.758 0 5 2.242 5 5v25c0 2.758-2.242 5-5 5H5c-2.758 0-5-2.242-5-5v-25m36.25 10H3.75v15c0 .688.563 1.25 1.25 1.25h30c.688 0 1.25-.562 1.25-1.25zm-28.75-5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m10-2.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0m5 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
    />
  </svg>
)
export default SvgWindowOutline
