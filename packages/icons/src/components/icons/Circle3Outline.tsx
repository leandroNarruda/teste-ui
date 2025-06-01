import type { SVGProps } from 'react'
const SvgCircle3Outline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#circle-3-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M20 3.75a16.25 16.25 0 1 1 0 32.5 16.25 16.25 0 0 1 0-32.5M20 40a20 20 0 1 0 0-40 20 20 0 0 0 0 40m-5.625-30a1.87 1.87 0 0 0-1.875 1.875 1.87 1.87 0 0 0 1.875 1.875h5.18l-3.946 3.617a1.88 1.88 0 0 0-.476 2.07 1.86 1.86 0 0 0 1.758 1.188l4.023-.023a2.827 2.827 0 1 1 .016 5.656h-2.18a3.03 3.03 0 0 1-2.578-1.438l-.203-.328a1.87 1.87 0 0 0-2.578-.61c-.875.548-1.157 1.704-.61 2.579l.203.328A6.78 6.78 0 0 0 18.75 30h2.172a6.58 6.58 0 0 0 6.578-6.578 6.567 6.567 0 0 0-5.828-6.531l3.969-3.633a1.89 1.89 0 0 0 .484-2.063A1.87 1.87 0 0 0 24.375 10z"
      />
    </g>
    <defs>
      <clipPath id="circle-3-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCircle3Outline
