import type { SVGProps } from 'react'
const SvgCircleXSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#circle-x-solido_svg__a)">
      <path d="M20 40c11.047 0 20-8.953 20-20S31.047 0 20 0 0 8.953 0 20s8.953 20 20 20m-5.445-29.336L20 17.094l5.445-6.43a1.87 1.87 0 0 1 2.64-.219c.79.672.892 1.852.22 2.64L22.453 20l5.852 6.914a1.87 1.87 0 0 1-.22 2.64 1.88 1.88 0 0 1-2.64-.218L20 22.906l-5.445 6.43c-.672.789-1.852.89-2.64.219a1.87 1.87 0 0 1-.22-2.64L17.547 20l-5.852-6.914a1.87 1.87 0 0 1 .22-2.64 1.88 1.88 0 0 1 2.64.218" />
    </g>
    <defs>
      <clipPath id="circle-x-solido_svg__a">
        <path d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCircleXSolido
