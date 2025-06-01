import type { SVGProps } from 'react'
const SvgClockDuotone2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#clock-duotone2_svg__a)">
      <path
        fill="#E84A4A"
        d="M21.875 9.375V19l6.664 4.438c.86.578 1.094 1.742.453 2.601-.508.86-1.672 1.094-2.531.453l-7.5-5c-.523-.281-.836-.867-.836-1.492V9.375A1.87 1.87 0 0 1 20 7.5a1.87 1.87 0 0 1 1.875 1.875"
      />
      <path
        fill="#2D253F"
        d="M20 40C8.953 40 0 31.047 0 20S8.953 0 20 0s20 8.953 20 20-8.953 20-20 20m-1.875-20c0 .625.313 1.21.836 1.492l7.5 5c.86.64 2.023.406 2.531-.453.64-.86.406-2.023-.453-2.602L21.875 19V9.375c0-1.04-.836-1.875-1.945-1.875-.97 0-1.875.836-1.875 1.875z"
      />
    </g>
    <defs>
      <clipPath id="clock-duotone2_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgClockDuotone2
