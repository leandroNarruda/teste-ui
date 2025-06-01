import type { SVGProps } from 'react'
const SvgCopyOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#copy-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M17.5 0c-2.758 0-5 2.242-5 5v17.5c0 2.758 2.242 5 5 5H35c2.758 0 5-2.242 5-5V5c0-2.758-2.242-5-5-5zM5 12.5c-2.758 0-5 2.242-5 5V35c0 2.758 2.242 5 5 5h17.5c2.758 0 5-2.242 5-5v-5h-3.75v5c0 .688-.562 1.25-1.25 1.25H5c-.687 0-1.25-.562-1.25-1.25V17.5c0-.687.563-1.25 1.25-1.25h5V12.5z"
      />
    </g>
    <defs>
      <clipPath id="copy-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCopyOutline
