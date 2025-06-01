import type { SVGProps } from 'react'
const SvgCirclePlayOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#circle-play-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M21.75 12a9.75 9.75 0 1 0-19.5 0 9.75 9.75 0 0 0 19.5 0M0 12a12 12 0 1 1 24 0 12 12 0 0 1-24 0m8.827-5.105a1.13 1.13 0 0 1 1.139.024l6.75 4.125c.332.206.539.567.539.96 0 .394-.207.755-.54.962l-6.75 4.125c-.346.21-.782.22-1.138.023a1.12 1.12 0 0 1-.577-.98v-8.25c0-.407.22-.782.577-.98z"
      />
    </g>
    <defs>
      <clipPath id="circle-play-outline_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCirclePlayOutline
