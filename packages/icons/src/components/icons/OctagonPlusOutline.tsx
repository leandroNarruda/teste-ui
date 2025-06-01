import type { SVGProps } from 'react'
const SvgOctagonPlusOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#octagon-plus-outline_svg__a)">
      <path
        fill="#8C8895"
        d="M6.59.994a3.37 3.37 0 0 1 2.387-.99h6.046c.896 0 1.753.357 2.386.99l5.597 5.597c.633.632.99 1.49.99 2.386v6.046c0 .896-.357 1.754-.99 2.386l-5.597 5.597c-.633.633-1.49.99-2.386.99H8.977a3.37 3.37 0 0 1-2.386-.99L.994 17.41a3.37 3.37 0 0 1-.99-2.386V8.977c0-.896.357-1.754.99-2.386zm4.285 15.131c0 .623.502 1.125 1.125 1.125s1.125-.502 1.125-1.125v-3h3c.623 0 1.125-.502 1.125-1.125s-.502-1.125-1.125-1.125h-3v-3c0-.623-.502-1.125-1.125-1.125s-1.125.502-1.125 1.125v3h-3c-.623 0-1.125.502-1.125 1.125s.502 1.125 1.125 1.125h3z"
      />
    </g>
    <defs>
      <clipPath id="octagon-plus-outline_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgOctagonPlusOutline
