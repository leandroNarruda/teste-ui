import type { SVGProps } from 'react'
const SvgCircleXOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#circle-x-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M20 3.75a16.25 16.25 0 1 1 0 32.5 16.25 16.25 0 0 1 0-32.5M20 40a20 20 0 1 0 0-40 20 20 0 0 0 0 40m-5.445-29.336a1.87 1.87 0 0 0-2.64-.219 1.87 1.87 0 0 0-.22 2.64L17.547 20l-5.852 6.914a1.87 1.87 0 0 0 .22 2.64c.788.665 1.976.571 2.64-.218L20 22.906l5.445 6.43c.672.789 1.852.89 2.64.219.79-.672.892-1.852.22-2.64L22.453 20l5.852-6.914a1.87 1.87 0 0 0-.22-2.64 1.88 1.88 0 0 0-2.64.218L20 17.094z"
      />
    </g>
    <defs>
      <clipPath id="circle-x-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCircleXOutline
