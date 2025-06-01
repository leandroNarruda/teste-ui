import type { SVGProps } from 'react'
const SvgPrintOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#print-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M8.75 12.5V5c0-.687.563-1.25 1.25-1.25h17.93c.328 0 .648.133.883.367l2.07 2.07c.234.235.367.555.367.883v5.43H35V7.07a5 5 0 0 0-1.46-3.539l-2.08-2.07A4.98 4.98 0 0 0 27.93 0H10C7.242 0 5 2.242 5 5v7.5zM10 28.75h20v7.5H10zM8.75 25a2.497 2.497 0 0 0-2.5 2.5h-2.5V20c0-.687.563-1.25 1.25-1.25h30c.688 0 1.25.563 1.25 1.25v7.5h-2.5c0-1.383-1.117-2.5-2.5-2.5zm25 6.25h3.75c1.383 0 2.5-1.117 2.5-2.5V20c0-2.758-2.242-5-5-5H5c-2.758 0-5 2.242-5 5v8.75c0 1.383 1.117 2.5 2.5 2.5h3.75v6.25c0 1.383 1.117 2.5 2.5 2.5h22.5c1.383 0 2.5-1.117 2.5-2.5z"
      />
    </g>
    <defs>
      <clipPath id="print-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgPrintOutline
