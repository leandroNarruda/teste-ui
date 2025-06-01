import type { SVGProps } from 'react'
const SvgPenToSquareSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#pen-to-square-solid_svg__a)">
      <path
        fill="#2E2640"
        d="M36.844 1.695a4.37 4.37 0 0 0-6.188 0L28.305 4.04l7.648 7.649 2.352-2.352a4.37 4.37 0 0 0 0-6.188zM13.469 18.883a4.3 4.3 0 0 0-1.055 1.71l-2.312 6.938a1.88 1.88 0 0 0 .453 1.922c.5.508 1.242.68 1.922.453l6.937-2.312a4.4 4.4 0 0 0 1.711-1.055l13.07-13.078-7.656-7.656zM7.5 5C3.36 5 0 8.36 0 12.5v20C0 36.64 3.36 40 7.5 40h20c4.14 0 7.5-3.36 7.5-7.5V25c0-1.383-1.117-2.5-2.5-2.5A2.497 2.497 0 0 0 30 25v7.5c0 1.383-1.117 2.5-2.5 2.5h-20A2.497 2.497 0 0 1 5 32.5v-20C5 11.117 6.117 10 7.5 10H15c1.383 0 2.5-1.117 2.5-2.5S16.383 5 15 5z"
      />
    </g>
    <defs>
      <clipPath id="pen-to-square-solid_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgPenToSquareSolid
