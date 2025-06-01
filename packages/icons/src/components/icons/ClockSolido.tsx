import type { SVGProps } from 'react'
const SvgClockSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#clock-solido_svg__a)">
      <path d="M20 40C8.953 40 0 31.047 0 20S8.953 0 20 0s20 8.953 20 20-8.953 20-20 20M18.125 9.375V20c0 .625.313 1.21.836 1.563l7.5 5a1.87 1.87 0 0 0 2.602-.524 1.87 1.87 0 0 0-.524-2.602L21.875 19V9.375A1.87 1.87 0 0 0 20 7.5a1.87 1.87 0 0 0-1.875 1.875" />
    </g>
    <defs>
      <clipPath id="clock-solido_svg__a">
        <path d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgClockSolido
