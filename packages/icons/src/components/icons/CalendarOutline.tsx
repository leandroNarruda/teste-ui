import type { SVGProps } from 'react'
const SvgCalendarOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 41"
    {...props}
  >
    <g clipPath="url(#calendar-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M14.375 2.6A1.87 1.87 0 0 0 12.5.723 1.87 1.87 0 0 0 10.625 2.6v3.125H7.5c-2.758 0-5 2.242-5 5v25c0 2.758 2.242 5 5 5h25c2.758 0 5-2.242 5-5v-25c0-2.758-2.242-5-5-5h-3.125V2.6A1.87 1.87 0 0 0 27.5.724 1.87 1.87 0 0 0 25.625 2.6v3.125h-11.25zM6.25 15.723h27.5v20c0 .688-.562 1.25-1.25 1.25h-25c-.687 0-1.25-.562-1.25-1.25z"
      />
    </g>
    <defs>
      <clipPath id="calendar-outline_svg__a">
        <path fill="#fff" d="M0 .724h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCalendarOutline
