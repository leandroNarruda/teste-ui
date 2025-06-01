import type { SVGProps } from 'react'
const SvgCircleInfoSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#circle-info-solido_svg__a)">
      <path d="M20 40c11.047 0 20-8.953 20-20S31.047 0 20 0 0 8.953 0 20s8.953 20 20 20m-3.125-13.75h1.875v-5h-1.875A1.87 1.87 0 0 1 15 19.375a1.87 1.87 0 0 1 1.875-1.875h3.75a1.87 1.87 0 0 1 1.875 1.875v6.875h.625A1.87 1.87 0 0 1 25 28.125 1.87 1.87 0 0 1 23.125 30h-6.25A1.87 1.87 0 0 1 15 28.125a1.87 1.87 0 0 1 1.875-1.875M20 15a2.497 2.497 0 0 1-2.5-2.5c0-1.383 1.117-2.5 2.5-2.5s2.5 1.117 2.5 2.5S21.383 15 20 15" />
    </g>
    <defs>
      <clipPath id="circle-info-solido_svg__a">
        <path d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCircleInfoSolido
