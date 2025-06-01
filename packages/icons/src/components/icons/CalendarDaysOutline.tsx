import type { SVGProps } from 'react'
const SvgCalendarDaysOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 41"
    {...props}
  >
    <g clipPath="url(#calendar-days-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M14.375 2.6A1.87 1.87 0 0 0 12.5.723 1.87 1.87 0 0 0 10.625 2.6v3.125H7.5c-2.758 0-5 2.242-5 5v25c0 2.758 2.242 5 5 5h25c2.758 0 5-2.242 5-5v-25c0-2.758-2.242-5-5-5h-3.125V2.6A1.87 1.87 0 0 0 27.5.724 1.87 1.87 0 0 0 25.625 2.6v3.125h-11.25zM6.25 15.723h6.25V20.1H6.25zm0 8.125h6.25v5H6.25zm10 0h7.5v5h-7.5zm11.25 0h6.25v5H27.5zm6.25-3.75H27.5v-4.375h6.25zm0 12.5v3.125c0 .688-.562 1.25-1.25 1.25h-5V32.6zm-10 0v4.375h-7.5V32.6zm-11.25 0v4.375h-5c-.687 0-1.25-.562-1.25-1.25V32.6zm11.25-12.5h-7.5v-4.375h7.5z"
      />
    </g>
    <defs>
      <clipPath id="calendar-days-outline_svg__a">
        <path fill="#fff" d="M0 .724h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCalendarDaysOutline
