import type { SVGProps } from 'react'
const SvgCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#circle-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M36.25 20a16.25 16.25 0 1 0-32.5 0 16.25 16.25 0 0 0 32.5 0M0 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0"
      />
    </g>
    <defs>
      <clipPath id="circle-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCircleOutline
