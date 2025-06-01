import type { SVGProps } from 'react'
const SvgCircleSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#circle-solido_svg__a)">
      <path d="M20 40a20 20 0 1 0 0-40 20 20 0 0 0 0 40" />
    </g>
    <defs>
      <clipPath id="circle-solido_svg__a">
        <path d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCircleSolido
