import type { SVGProps } from 'react'
const SvgShapesOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#shapes-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M32.172 16.234c-.438.782-1.274 1.196-2.172 1.196H15c-.898 0-1.734-.414-2.172-1.196a2.5 2.5 0 0 1 .031-2.523l7.5-12.497A2.49 2.49 0 0 1 22.5 0c.875 0 1.695.46 2.14 1.214l7.5 12.497c.47.773.477 1.734.032 2.523M22.5 4.93l-5.29 8.75h10.58zm14.375 16.25c1.727 0 3.125 1.468 3.125 3.125v11.32a3.124 3.124 0 0 1-3.125 3.125h-11.25a3.124 3.124 0 0 1-3.125-3.125v-11.32c0-1.657 1.398-3.125 3.125-3.125zm-.625 3.75h-10V35h10zM20 30c0 5.523-4.477 10-10 10S0 35.523 0 30s4.477-10.07 10-10.07S20 24.477 20 30m-10-6.32c-3.452 0-6.25 2.867-6.25 6.32A6.25 6.25 0 0 0 10 36.25 6.25 6.25 0 0 0 16.25 30c0-3.453-2.797-6.32-6.25-6.32"
      />
    </g>
    <defs>
      <clipPath id="shapes-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgShapesOutline
