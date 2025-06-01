import type { SVGProps } from 'react'
const SvgFileSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 36 48"
    {...props}
  >
    <g clipPath="url(#file-solido_svg__a)">
      <path d="M0 6c0-3.31 2.69-6 6-6h15v12c0 1.66 1.34 3 3 3h12v27c0 3.31-2.69 6-6 6H6c-3.31 0-6-2.69-6-6zm36 6H24V0z" />
    </g>
    <defs>
      <clipPath id="file-solido_svg__a">
        <path d="M0 0h36v48H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgFileSolido
