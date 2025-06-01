import type { SVGProps } from 'react'
const SvgShapesSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#shapes-solido_svg__a)">
      <path d="M24.64 1.21A2.5 2.5 0 0 0 22.5 0c-.875 0-1.695.46-2.14 1.21l-7.5 12.5A2.498 2.498 0 0 0 15 17.493h15c.898 0 1.734-.484 2.172-1.265a2.52 2.52 0 0 0-.031-2.516zM22.5 24.376v11.25a3.124 3.124 0 0 0 3.125 3.125h11.25A3.124 3.124 0 0 0 40 35.625v-11.25a3.124 3.124 0 0 0-3.125-3.125h-11.25a3.124 3.124 0 0 0-3.125 3.125M10 40c5.523 0 10-4.477 10-10s-4.477-10-10-10S0 24.477 0 30s4.477 10 10 10" />
    </g>
    <defs>
      <clipPath id="shapes-solido_svg__a">
        <path d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgShapesSolido
