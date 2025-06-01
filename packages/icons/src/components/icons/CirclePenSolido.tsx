import type { SVGProps } from 'react'
const SvgCirclePenSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#circle-pen-solido_svg__a)">
      <path d="M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24m4.772-17.452.675.675a1.88 1.88 0 0 1 0 2.654l-1.003 1.003-3.328-3.328 1.003-1.004a1.88 1.88 0 0 1 2.653 0M7.12 13.547l4.932-4.931 3.328 3.328-4.932 4.926a1.5 1.5 0 0 1-.698.394l-2.817.703a.74.74 0 0 1-.713-.197.74.74 0 0 1-.197-.712l.704-2.817c.065-.263.201-.507.393-.699z" />
    </g>
    <defs>
      <clipPath id="circle-pen-solido_svg__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCirclePenSolido
