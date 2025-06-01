import type { SVGProps } from 'react'
const SvgClockOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#clock-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M36.25 20a16.25 16.25 0 1 1-32.5 0 16.25 16.25 0 0 1 32.5 0M0 20a20 20 0 1 0 40 0 20 20 0 0 0-40 0M18.125 9.375V20c0 .625.313 1.21.836 1.563l7.5 5a1.87 1.87 0 0 0 2.602-.524 1.87 1.87 0 0 0-.524-2.602L21.875 19V9.375A1.87 1.87 0 0 0 20 7.5a1.87 1.87 0 0 0-1.875 1.875"
      />
    </g>
    <defs>
      <clipPath id="clock-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgClockOutline
