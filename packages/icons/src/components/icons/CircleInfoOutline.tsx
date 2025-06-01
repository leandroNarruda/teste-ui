import type { SVGProps } from 'react'
const SvgCircleInfoOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#circle-info-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M20 3.75a16.25 16.25 0 1 1 0 32.5 16.25 16.25 0 0 1 0-32.5M20 40a20 20 0 1 0 0-40 20 20 0 0 0 0 40m-3.125-13.75A1.87 1.87 0 0 0 15 28.125 1.87 1.87 0 0 0 16.875 30h6.25A1.87 1.87 0 0 0 25 28.125a1.87 1.87 0 0 0-1.875-1.875H22.5v-6.875a1.87 1.87 0 0 0-1.875-1.875h-3.75A1.87 1.87 0 0 0 15 19.375a1.87 1.87 0 0 0 1.875 1.875h1.875v5zM20 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      />
    </g>
    <defs>
      <clipPath id="circle-info-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCircleInfoOutline
