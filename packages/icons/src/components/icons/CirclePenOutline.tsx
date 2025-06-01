import type { SVGProps } from 'react'
const SvgCirclePenOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#circle-pen-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M21.75 12a9.75 9.75 0 1 0-19.5 0 9.75 9.75 0 0 0 19.5 0M0 12a12 12 0 1 1 24 0 12 12 0 0 1-24 0m16.772-5.452.675.675a1.88 1.88 0 0 1 0 2.654l-1.003 1.003-3.328-3.328 1.003-1.004a1.88 1.88 0 0 1 2.653 0M7.12 13.547l4.932-4.931 3.328 3.328-4.932 4.926a1.5 1.5 0 0 1-.698.394l-2.817.703a.74.74 0 0 1-.713-.197.74.74 0 0 1-.197-.712l.704-2.817c.065-.263.201-.507.393-.699z"
      />
    </g>
    <defs>
      <clipPath id="circle-pen-outline_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCirclePenOutline
