import type { SVGProps } from 'react'
const SvgCircleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 33 32"
    {...props}
  >
    <g clipPath="url(#circle-right_svg__a)">
      <path
        fill="#2E2640"
        d="M29.5 16a13 13 0 1 1-26 0 13 13 0 0 1 26 0m-29 0a16 16 0 1 0 32 0 16 16 0 0 0-32 0m18.413-7.556a1.395 1.395 0 0 0-2.413.95V13h-6c-1.106 0-2 .894-2 2v2c0 1.106.894 2 2 2h6v3.606a1.395 1.395 0 0 0 2.413.95l6.243-6.693c.219-.238.344-.544.344-.863s-.125-.631-.344-.863z"
      />
    </g>
    <defs>
      <clipPath id="circle-right_svg__a">
        <path fill="#fff" d="M.5 0h32v32H.5z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCircleRight
