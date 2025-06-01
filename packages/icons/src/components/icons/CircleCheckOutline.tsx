import type { SVGProps } from 'react'
const SvgCircleCheckOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#circle-check-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M19.047 26.547a2.193 2.193 0 0 1-3.094 0l-5-5a2.193 2.193 0 0 1 0-3.094 2.193 2.193 0 0 1 3.094 0l3.453 3.453 8.453-8.453a2.193 2.193 0 0 1 3.094 0 2.193 2.193 0 0 1 0 3.094zM40 20c0 11.047-8.953 20-20 20S0 31.047 0 20 8.953 0 20 0s20 8.953 20 20M20 3.75C11.023 3.75 3.75 11.023 3.75 20S11.023 36.25 20 36.25 36.25 28.977 36.25 20 28.977 3.75 20 3.75"
      />
    </g>
    <defs>
      <clipPath id="circle-check-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCircleCheckOutline
