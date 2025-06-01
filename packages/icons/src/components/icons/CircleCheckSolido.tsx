import type { SVGProps } from 'react'
const SvgCircleCheckSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#circle-check-solido_svg__a)">
      <path d="M20 40c11.047 0 20-8.953 20-20S31.047 0 20 0 0 8.953 0 20s8.953 20 20 20m8.828-23.672-10 10a1.867 1.867 0 0 1-2.648 0l-5-5a1.867 1.867 0 0 1 0-2.648 1.874 1.874 0 0 1 2.648 0l3.672 3.672 8.672-8.68a1.867 1.867 0 0 1 2.648 0 1.874 1.874 0 0 1 0 2.648z" />
    </g>
    <defs>
      <clipPath id="circle-check-solido_svg__a">
        <path d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCircleCheckSolido
