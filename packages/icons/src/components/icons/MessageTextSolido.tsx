import type { SVGProps } from 'react'
const SvgMessageTextSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#message-text-solido_svg__a)">
      <path d="M0 5c0-2.758 2.242-5 5-5h30c2.758 0 5 2.242 5 5v22.5c0 2.758-2.242 5-5 5H24.164L14.5 39.75a1.26 1.26 0 0 1-1.312.117 1.23 1.23 0 0 1-.688-1.117V32.5H5c-2.758 0-5-2.242-5-5zm13.125 3.75a1.87 1.87 0 0 0-1.875 1.875 1.87 1.87 0 0 0 1.875 1.875h5v10.625A1.87 1.87 0 0 0 20 25a1.87 1.87 0 0 0 1.875-1.875V12.5h5a1.87 1.87 0 0 0 1.875-1.875 1.87 1.87 0 0 0-1.875-1.875h-13.75" />
    </g>
    <defs>
      <clipPath id="message-text-solido_svg__a">
        <path d="M0 0h40v39.998H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgMessageTextSolido
