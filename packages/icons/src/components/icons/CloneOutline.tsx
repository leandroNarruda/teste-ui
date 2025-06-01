import type { SVGProps } from 'react'
const SvgCloneOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#clone-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M5 36.25h17.5c.688 0 1.25-.562 1.25-1.25v-5h3.75v5c0 2.758-2.242 5-5 5H5c-2.758 0-5-2.242-5-5V17.5c0-2.758 2.242-5 5-5h5v3.75H5c-.687 0-1.25.563-1.25 1.25V35c0 .688.563 1.25 1.25 1.25m12.5-12.5H35c.688 0 1.25-.562 1.25-1.25V5c0-.687-.562-1.25-1.25-1.25H17.5c-.687 0-1.25.563-1.25 1.25v17.5c0 .688.563 1.25 1.25 1.25m-5-1.25V5c0-2.758 2.242-5 5-5H35c2.758 0 5 2.242 5 5v17.5c0 2.758-2.242 5-5 5H17.5c-2.758 0-5-2.242-5-5"
      />
    </g>
    <defs>
      <clipPath id="clone-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCloneOutline
